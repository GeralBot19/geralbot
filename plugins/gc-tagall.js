let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐞𝐬𝐩𝐨𝐫𝐭𝟒𝐤.𝐠𝐠 * ${pesan}`
let teks = `Creador Wa.me/51988802645 SI QUIERES BOT COMUNICAME
🦋𝑫𝒆𝒔𝒑𝒊𝒆𝒓𝒕𝒆𝒏 𝑬𝒔𝒄𝒍𝒂𝒗@𝒔 🦋 *\n\n❄️ ${oi}\n\n❄️ * 👨🏻‍💻💙➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: *\n`
for (let mem of participants) {
teks += `🧸🌻≽ @${mem.id.split('@')[0]}\n`}
teks += `𝐄-𝐬𝐩𝐨𝐫𝐭 𝟒𝐤`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
