import { getGuildBasicInfo } from "./nexonOpenApi";

export const returnGuildMark = async (guildId: string) => {
  const guildBasicInfo = await getGuildBasicInfo(guildId);

  if (guildBasicInfo) {
    if (guildBasicInfo.guild_mark) return guildBasicInfo.guild_mark;
    if (guildBasicInfo.guild_mark_custom)
      return "data:image/png;base64," + guildBasicInfo.guild_mark_custom;
    return "";
  }
};
