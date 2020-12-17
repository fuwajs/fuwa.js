import axios from "axios";
import { discordAPI } from "./_Const";
class response {
  constructor(private req: any, private token: string) {}
  reply(content: string) {
    if (content.length > 2000) {
      throw new Error("message should be less than 2000 characters");
    }
    axios(discordAPI.api + `/channels/${this.req.channel_id}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: " Bot " + this.token,
      },
      data: {
        content: `<@${this.req.author.id}>, ${content}`,
      },
    })
      .then()
      .catch((err: any) => console.log(err.data));
  }
  send(content: string) {
    if (content.length > 2000) {
      throw new Error("message should be less than 2000 characters");
    } else {
      axios(discordAPI.api + `${this.req.channel_id}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: " Bot " + this.token,
        },
        data: {
          content: content,
        },
      })
        .then()
        .catch((err: any) => console.log(err.data));
    }
  }
}
export default response;
