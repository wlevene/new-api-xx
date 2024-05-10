package imagehosting

import (
	"fmt"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type AliImageHostingData struct {
	gorm.Model
	TaskID string
	AliURl string
}

var hostingDB *gorm.DB

func init() {
	var err error
	hostingDB, err = gorm.Open(sqlite.Open("img_hosting.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	fmt.Println("hostingDB:", hostingDB)
	hostingDB.AutoMigrate(&AliImageHostingData{})
}

func AliHostingInsertDB(hosting *AliImageHostingData) {
	if hosting == nil {
		return
	}

	if hosting.AliURl == "" ||
		hosting.TaskID == "" {
		return
	}

	fmt.Println(hosting.TaskID)
	fmt.Println(hosting.AliURl)

	if hostingDB == nil {
		fmt.Println("xxx")
	}

	result := hostingDB.Create(hosting)
	fmt.Println("create data:", result.Error)

}

func AliHostingFindDB(taskid string) *AliImageHostingData {
	if taskid == "" {
		return nil
	}

	hosting := &AliImageHostingData{}

	hostingDB.First(hosting, "task_id = ?", taskid)

	return hosting

}
