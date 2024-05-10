package imagehosting

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func GetAliUrl(task_id string, mj_url string) string {
	if task_id == "" {
		return mj_url
	}

	result := AliHostingFindDB(task_id)
	if result == nil {
		return mj_url
	}

	if result.AliURl != "" {
		return result.AliURl
	}

	if result.TaskID == "" {
		client := NewAliImageHostingClient()

		resp, err := http.Get(mj_url)
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

		ali_url := client.Upload(task_id, body)
		return ali_url
	}

	return ""
}
