const {CLient, CommandInteraction} = require("discord.js");

    if (interaction.isContextMenu()){
      try {
        fs.readdir("./levelsistem/", (err, files) => {
          if (err) throw err;
  
          files.forEach(async (f) => {
            const command = require(`../levelsistem/${f}`);
            if (
              interaction.commandName.toLowerCase() === command.name.toLowerCase()
            ) {
              return command.run(interaction);
            }
          });
        });
      } catch (err) {
        console.error(err);
      }
    }
