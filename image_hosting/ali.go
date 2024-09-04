package imagehosting

import (
	"bytes"
	"fmt"
	"log"
	"strconv"
	"time"

	"github.com/aliyun/aliyun-oss-go-sdk/oss"
)

type (
	AliImageHostingClient struct {
		client *oss.Client
		bucket *oss.Bucket
	}
)

func NewAliImageHostingClient() *AliImageHostingClient {

	time := oss.Timeout(40, 100)
	// conn := oss.MaxConns(10, 20, 20)
	client, err := oss.New(
		Endpoint,
		ACCESS_KEY_ID,
		ACCESS_KEY_SECRET,
		time,
	)
	if err != nil {
		fmt.Println("1", err)
		return nil
	}

	bucket, err := client.Bucket(BUCKET)
	if err != nil {
		fmt.Println("2", err)
		return nil
	}

	result := &AliImageHostingClient{
		client: client,
		bucket: bucket,
	}

	return result
}

func (ali *AliImageHostingClient) Upload(task_id string, bytes_val []byte) string {
	fmt.Println("upload...")

	if len(bytes_val) == 0 {
		log.Println("3")
		return ""
	}

	objectKey := task_id

	if objectKey == "" {

		milliseconds := time.Now().UnixNano() / int64(time.Millisecond)

		// 将毫秒级时间戳转换为字符串
		objectKey = strconv.FormatInt(milliseconds, 10)

	}

	err := ali.bucket.PutObject(objectKey+".png", bytes.NewReader([]byte(bytes_val)))
	if err != nil {
		log.Println("4", err)
		return ""
	}

	url := fmt.Sprintf("http://%s.%s/%s.png", BUCKET, Endpoint, objectKey)

	hosting := &AliImageHostingData{
		TaskID: task_id,
		AliURl: url,
	}

	AliHostingInsertDB(hosting)

	// 获取文件地址
	// 格式：http://<Bucket 域名>/<文件路径>
	// 例如：http://<your-bucket-name>.<your-oss-endpoint>.com/<your-object-name>

	return url
}

func (ali *AliImageHostingClient) GetFile(key string) {

	err := ali.bucket.GetObjectToFile(key, "./test")
	if err != nil {
		fmt.Println("5", err)
		// HandleError(err)
	}

}
