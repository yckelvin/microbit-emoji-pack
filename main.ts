microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_1, function (message) {
    microIoT.microIoT_showUserText(0, "Temp Message")
    if (message == "smile") {
        basic.showIcon(IconNames.Happy)
    } else if (message == "sad") {
        basic.showIcon(IconNames.Sad)
    } else if (message == "yes") {
        basic.showIcon(IconNames.Yes)
    } else if (message == "no") {
        basic.showIcon(IconNames.No)
    }
})
microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    microIoT.microIoT_showUserText(0, "Topic_0 Message")
    if (message == "smile") {
        basic.showIcon(IconNames.Happy)
    } else if (message == "sad") {
        basic.showIcon(IconNames.Sad)
    } else if (message == "yes") {
        basic.showIcon(IconNames.Yes)
    } else if (message == "no") {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_clear()
})
microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_2, function (message) {
    microIoT.microIoT_showUserText(0, "Sound Message")
    if (message == "smile") {
        basic.showIcon(IconNames.Happy)
    } else if (message == "sad") {
        basic.showIcon(IconNames.Sad)
    } else if (message == "yes") {
        basic.showIcon(IconNames.Yes)
    } else if (message == "no") {
        basic.showIcon(IconNames.No)
    }
})
microIoT.microIoT_initDisplay()
let wifi_name = "DGINCB_WT6F"
microIoT.microIoT_WIFI(wifi_name, "20210601")
microIoT.microIoT_MQTT(
"vkW338gnR",
"DkZq38gnRz",
"DanDCZznR",
microIoT.SERVERS.English
)
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_1, "QlCEHyg7R")
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_2, "TBxSVei7R")
