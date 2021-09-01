# REDIS数据结构设计

## 课堂运行时数据字段

:::tip
以下字段都是有用的字段,其余字段都是接口返回的无用字段
:::
| Key                       | Value(example)           | Type       | description              |
| :------------------------ | :----------------------- | :--------- | :----------------------- |
| member.1                  | `offline` ` online`  | String     | 描述老师的在线状态       |
| member.2                  | `offline` `online`  | String     | 描述学生的在线状态       |
| userId                    | 6473825ea2deebc99447bcee | String     | 暂无作用                 |
| key                       | !13juvg4z5s9ww           | String     | 课堂id                   |
| planId                    | 92625                    | Number     | 课程计划id               |
| classLogId                | 51021                    | Number     | 课程记录id               |
| classTableId              | 0                        | Number     | 课程表id(试听课为0)      |
| startTime                 | 1611812094               | unix(秒)   | 课程的预计开始时间       |
| status | `waiting` `start` `stop` | String | 用于描述课堂的状态 |
| real_start_time           | 1611812148132            | unix(毫秒)  | 课程的实际开始时间       |
| teacher_join_time | 1611812148132 | unix(毫秒) | 老师的加入时间 |
| student_join_time | 1611812148132 | unix(毫秒) | 学生的加入时间 |
| teacher_online_time | 200 | Number | 老师的在线时长 |
| student_online_time | 200 | Number | 学生的在线时长 |

:::tip 小贴士
nodejs的redis的api操作文档可能不全面,如有疑惑,可以[参考这里来进行开发](https://gitee.com/practice_case/redis-demo/tree/master/examples)
:::

## 查看运行时的课堂信息
为了方便线上和测试环境查看课程的进行状态,特地预留了接口方便查询课堂运行时状态

```markdown
GET /node/api/class/get_class_info?channelId=!13juvg4z5s9ww
TEST_HOST:dev.yiyou.yiyoujiaoyu.com.cn
PROD_HOST:yi-you.org
```

参数说明 channelId - 课堂频道ID



------



## 查看结束时的考勤信息

这个接口可以根据课堂ID查看已经结束的课堂的考勤信息

```markdown
GET /node/api/class/get_plan_class_attribute?channelId=!13juvg4z5s9ww
TEST_HOST:dev.yiyou.yiyoujiaoyu.com.cn
PROD_HOST:yi-you.org
```

参数说明 channelId - 课堂频道ID