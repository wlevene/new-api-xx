package imagehosting

import (
	"fmt"
	"io/ioutil"
	"log"
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
		return "", in_ali
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

		log.Println("start upload file to aliyun 。。。")
		client := NewAliImageHostingClient()

		resp, err := http.Get(task.ImageUrl)
		if err != nil {
			log.Println("a1", err)
			return "", in_ali
		}
		defer resp.Body.Close()

		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			log.Println("a2", err)
			return "", in_ali
		}

		ali_url := client.Upload(task.MjId, body)
		log.Println("upload aliyun finish image url:", ali_url)
		return ali_url, in_ali
	}

	return "", in_ali
}
