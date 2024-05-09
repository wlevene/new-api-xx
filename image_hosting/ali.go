package imagehosting

import (
	"bytes"
	"fmt"
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

	client, err := oss.New(Endpoint, ACCESS_KEY_ID, ACCESS_KEY_SECRET)
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

func (ali *AliImageHostingClient) Upload(key string, bytes_val []byte) string {
	fmt.Println("upload...")

	if len(bytes_val) == 0 {
		fmt.Println("3")
		return ""
	}

	objectKey := key

	if objectKey == "" {

		milliseconds := time.Now().UnixNano() / int64(time.Millisecond)

		// 将毫秒级时间戳转换为字符串
		objectKey = strconv.FormatInt(milliseconds, 10)

	}

	err := ali.bucket.PutObject(objectKey, bytes.NewReader([]byte(bytes_val)))
	if err != nil {
		fmt.Println("4", err)
		return ""
	}

	// 获取文件地址
	// 格式：http://<Bucket 域名>/<文件路径>
	// 例如：http://<your-bucket-name>.<your-oss-endpoint>.com/<your-object-name>

	return fmt.Sprintf("http://%s.%s.com/%s", BUCKET, Endpoint, objectKey)
}

func (ali *AliImageHostingClient) GetFile(key string) {

	err := ali.bucket.GetObjectToFile(key, "./test")
	if err != nil {
		fmt.Println("5", err)
		// HandleError(err)
	}

}
