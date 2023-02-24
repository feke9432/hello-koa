import { buffer } from "stream/consumers";

const rabbitmp = require("amqplib");

const config = {
  // protocol: "amqp",//协议 默认值amqp
	hostname: "192.168.1.4", //默认值为localhost
	port: 5672, //默认值为5672
	username: "admin", //默认值为guest
	password: "u52OynjCde", //默认值为guest
	// locale: "en_US",//默认值en_US
	// channelMax: 0,//设置每个连接的最大允许通道数量 默认值0 设置为0表示“没有限制”
	// frameMax: 0x1000,//amqp协议最大允许的字节数 默认值 0x1000 
	// heartbeat: 0,//心跳检测时间间隔 单位秒 默认值0 设置为0表示不使用该功能
	// vhost: "/",//默认值为/
}

// 队列配置
const options = {
  durable: false//关闭持久化  默认为开启
}

// 生产者
const send = (queueName: string, msg: any): Promise<any> => {
  return new Promise((reject, reslove) => {
    rabbitmp.connect(config)
      .then((conn: any) => {
        return conn.createChannel()
      })
      .then((channel: any) => {
        return channel.assertQueue(queueName, options)
          .then(function(ok: string) {
            return channel.sendToQueue(queueName, new Buffer(msg), {
              persistent: true
            })
            .then(function(data: any){
              if(data) {
                reslove("success");
                channel.close();
              }else {
                reject("fail");
              }
            })
            .catch(function() {
              setTimeout(() => {
                if(channel) {
                  channel.close();
                }
              }, 500)
            })
          })
      })
      .catch(function(e: any){
        console.log("mq连接失败" + e);  
      })
  });
}

// 消费者
const customer = (queueName: string, receiveCallBack: Function) => {
  rabbitmp.connect(config)
    .then((conn: any) => {
      return conn.createChannel()
    })
    .then((channel: any) => {
      return channel.assertQueue(queueName, options)
        .then(function(ok: string) {
          return channel.consume(queueName, function(msg: any){
            if(msg !== null) {
              let data = msg.content.toString();
              channel.ack(msg);
              receiveCallBack(data);
            }
          })
        })
    })
    .catch(function(e: any){
      console.log("mq连接失败" + e);  
    })
}

// 注册消费者
// customer("myqueue", (data: any) => {
//   console.log('消费者接收消息:' + data)
// })

module.exports = {
  send,
  customer
}