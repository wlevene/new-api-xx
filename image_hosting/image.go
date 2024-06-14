package imagehosting

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"one-api/model"
)

func GetAliUrl(task *model.Midjourney, xossprocess string) (string, bool) {
	var in_ali bool
	if task == nil {
		return "", in_ali
	}

	if task.MjId == "" {
		return task.ImageUrl, in_ali
	}

	if task.FinishTime <= 0 {
		fmt.Println("任务还未完成,返回原始链接")
		return task.ImageUrl, in_ali
	}

	result := AliHostingFindDB(task.MjId)
	if result == nil {
		if xossprocess != "" {
			return fmt.Sprintf("%s?%s", task.ImageUrl, xossprocess), in_ali
		}
		return task.ImageUrl, in_ali
	}

	in_ali = true
	if result.AliURl != "" {
		return result.AliURl, in_ali
	}

	if result.TaskID == "" {
		client := NewAliImageHostingClient()

		resp, err := http.Get(task.ImageUrl)
		if err != nil {
			fmt.Println(err)
			return "", in_ali
		}
		defer resp.Body.Close()

		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			fmt.Println(err)
			return "", in_ali
		}

		ali_url := client.Upload(task.MjId, body)
		fmt.Println("image url:", ali_url)
		return ali_url, in_ali
	}

	return "", in_ali
}
