package imagehosting

import (
	"fmt"
	"testing"
)

func TestUpload(t *testing.T) {

	client := NewAliImageHostingClient()
	fmt.Println("client:", client)
	url := client.Upload("test-111", []byte{'1', '2'})

	fmt.Println(url)

	client.GetFile("test-111")
}
