const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Ping tamamdýr.");
  response.sendStatus(200);
});


const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const ta1 = new Discord.Client();
const ta2 = new Discord.Client();
const ta3 = new Discord.Client();
const ta4 = new Discord.Client();
const ta5 = new Discord.Client();
const ta6 = new Discord.Client();
const ta7 = new Discord.Client();
const ta8 = new Discord.Client();
const ta9 = new Discord.Client();
const ta10 = new Discord.Client();
const ta11 = new Discord.Client();
const ta12 = new Discord.Client();
const ta13 = new Discord.Client();
const ta14 = new Discord.Client();
const ta15 = new Discord.Client();
const ta16 = new Discord.Client();
const ta17 = new Discord.Client();
const ta18 = new Discord.Client();
const ta19 = new Discord.Client();
const ta20 = new Discord.Client();
const ta21 = new Discord.Client();
const ta22 = new Discord.Client();
const ta23 = new Discord.Client();
const ta24 = new Discord.Client();
const ta25 = new Discord.Client();
const ta26 = new Discord.Client();
const ta27 = new Discord.Client();
const ta28 = new Discord.Client();
const ta29 = new Discord.Client();
const ta30 = new Discord.Client();
const ta31 = new Discord.Client();
const ta32 = new Discord.Client();
const ta33 = new Discord.Client();
const ta34 = new Discord.Client();
const ta35 = new Discord.Client();
const ta36 = new Discord.Client();
const ta37 = new Discord.Client();
const ta38 = new Discord.Client();
const ta39 = new Discord.Client();
const ta40 = new Discord.Client();
const ta41 = new Discord.Client();
const ta42 = new Discord.Client();
const ta43 = new Discord.Client();
const ta44 = new Discord.Client();
const ta45 = new Discord.Client();
const ta46 = new Discord.Client();
const ta47 = new Discord.Client();
const ta48 = new Discord.Client();
const ta49 = new Discord.Client();
const ta50 = new Discord.Client();
const ta51 = new Discord.Client();
const ta52 = new Discord.Client();
const ta53 = new Discord.Client();
const ta54 = new Discord.Client();
const ta55 = new Discord.Client();
const ta56 = new Discord.Client();
const ta57 = new Discord.Client();
const ta58 = new Discord.Client();
const ta59 = new Discord.Client();
const ta60 = new Discord.Client();
const ta61 = new Discord.Client();
const ta62 = new Discord.Client();
const ta63 = new Discord.Client();
const ta64 = new Discord.Client();
const ta65 = new Discord.Client();
const ta66 = new Discord.Client();
const ta67 = new Discord.Client();
const ta68 = new Discord.Client();
const ta69 = new Discord.Client();
const ta70 = new Discord.Client();
const ta71 = new Discord.Client();
const ta72 = new Discord.Client();
const ta73 = new Discord.Client();
const ta74 = new Discord.Client();
const ta75 = new Discord.Client();
const ta76 = new Discord.Client();
const ta77 = new Discord.Client();
const ta78 = new Discord.Client();
const ta79 = new Discord.Client();
const ta80 = new Discord.Client();
const ta81 = new Discord.Client();
const ta82 = new Discord.Client();
const ta83 = new Discord.Client();
const ta84 = new Discord.Client();
const ta85 = new Discord.Client();
const ta86 = new Discord.Client();
const ta87 = new Discord.Client();
const ta88 = new Discord.Client();
const ta89 = new Discord.Client();
const ta90 = new Discord.Client();
const ta91 = new Discord.Client();


ta1.login("");
ta2.login("");
ta3.login("");
ta4.login("");
ta5.login("");
ta6.login("");
ta7.login("");
ta8.login("");
ta9.login("");
ta10.login("");
ta11.login("");
ta12.login("");
ta13.login("");
ta14.login("");
ta15.login("");
ta16.login("");
ta17.login("");
ta18.login("");
ta19.login("");
ta20.login("");
ta21.login("");
ta22.login("");
ta23.login("");
ta24.login("");
ta25.login("");
ta26.login("");
ta28.login("");
ta29.login("");
ta30.login("");
ta31.login("");
ta32.login("");
ta33.login("");
ta34.login("");
ta35.login("");
ta36.login("");
ta37.login("");
ta38.login("");
ta39.login("");
ta40.login("");
ta41.login("");
ta42.login("");
ta43.login("");
ta44.login("");
ta45.login("");
ta46.login("");
ta47.login("");
ta48.login("");
ta49.login("");
ta50.login("");
ta51.login("");
ta52.login("");
ta53.login("");
ta54.login("");
ta55.login("");
ta56.login("");
ta57.login("");
ta58.login("");
ta59.login("");
ta60.login("");
ta61.login("");

client.on("ta", async function() {
const voiceChannel = "777107963952889856"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})

ta1.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 5 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



ta2.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 5 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta3.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 2};
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta4.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta5.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta6.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta7.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 10 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg",   {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta8.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta9.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta10.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta11.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta12.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta13.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta14.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta15.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta16.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta17.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta18.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta19.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta20.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta21.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta22.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta23.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta24.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta25.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta26.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta27.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta28.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta29.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta30.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta31.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta32.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta33.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta34.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta35.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta36.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta37.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta38.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta39.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta40.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta41.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta42.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta43.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta44.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta45.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta46.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta47.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta48.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta49.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta50.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta51.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta52.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta53.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta54.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta55.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta56.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta57.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta58.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta59.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta60.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta61.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta62.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta63.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta64.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta65.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta66.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta67.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta68.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta69.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta70.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta71.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta72.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta73.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta74.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta75.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta76.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta77.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta78.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta79.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta80.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta81.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta82.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta83.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta84.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta85.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta86.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta87.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta88.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta89.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta90.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta91.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});


ta91.on("ready", () =>{
    console.log(`bu adla katýldým ${client.user.tag}!`);
    client.user.setPresence({
        status: "dnd",
        game: {
            name: ".help",
            type: "WATCHING"
        }
    });
 });