package imagehosting

import (
	"fmt"
	"testing"
)

func TestUpload(t *testing.T) {

	client := NewAliImageHostingClient()

	client.GetFile("1715391715582536")
	return

	fmt.Println("client:", client)
	url := client.Upload("test-111", []byte{'1', '2'})

	fmt.Println(url)

	client.GetFile("test-111")
}

func TestFindHosting(t *testing.T) {
	result := AliHostingFindDB("1715351615729501")
	fmt.Println("AliURl:", result.AliURl)
	fmt.Println(result.TaskID)

}
