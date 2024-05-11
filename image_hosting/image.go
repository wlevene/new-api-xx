package imagehosting

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"one-api/model"
)

func GetAliUrl(task *model.Midjourney) string {
	if task == nil {
		return ""
	}

	if task.MjId == "" {
		return task.ImageUrl
	}

	if task.FinishTime <= 0 {
		fmt.Println("任务还未完成,返回原始链接")
		return task.ImageUrl
	}

	result := AliHostingFindDB(task.MjId)
	if result == nil {
		return task.ImageUrl
	}

	if result.AliURl != "" {
		return result.AliURl
	}

	if result.TaskID == "" {
		client := NewAliImageHostingClient()

		resp, err := http.Get(task.ImageUrl)
		if err != nil {
			fmt.Println(err)
			return ""
		}
		defer resp.Body.Close()

		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			fmt.Println(err)
			return ""
		}

		ali_url := client.Upload(task.MjId, body)
		fmt.Println("image url:", ali_url)
		return ali_url
	}

	return ""
}
