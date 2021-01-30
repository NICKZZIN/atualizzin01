/*
Hallo iam Ramlan:)
SC By : RAMLAN GANS
*/
//YANG ATAS JANGAN DI UBAH UM:)
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./R4ML4N/color')
const { help } = require('./R4ML4N/help')
const { donasi } = require('./R4ML4N/donasi')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./R4ML4N/functions')
const { fetchJson } = require('./R4ML4N/fetcher')
const { recognize } = require('./R4ML4N/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./R4ML4N/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./R4ML4N/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./R4ML4N/simi.json'))
const vcard = 'BEGIN:VCARD\n' // OM JANGAN DI UBAH OM
            + 'VERSION:3.0\n' // INI WEEM RAMLAN GANS
            + 'FN:RamlanGans\n' // BRUXINHO MODS
            + 'ORG:Owner BOT;\n' // BRUXINHO MODS
            + 'TEL;type=CELL;type=VOICE;waid=5512997277680:+5512997277680\n' // UBAH INI
            + 'END:VCARD' // WEEM DIHAPUS GUE BERHENTI UPDATE SCRIPT
prefix = '.'
blocked = []

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minuto ${pad(seconds)} Segundo`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./Ramlan.json') && client.loadAuthInfo('./Ramlan.json')
	client.on('connecting', () => {
		start('2', 'Bruxinho...')
	})
	client.on('open', () => {
		success('2', 'BruxinhoMods')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Ramlan.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        setInterval(function () {
  for (i = 0; i < 3; i++) {
    console.log(`[ ${moment().format("HH:mm:ss")} ] => Hallo I'm Ramlan :)`)
  }
}, 15000)
	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `[ BEM VINDO AO GRUPO ${mdata.subject}* ] \n___________________________\n@${num.split('@')[0]} INTRO!! \nNOME : \nNÚMERO : \nLEU AS REGRAS? : \nQUANTOS ANOS? : \nSABE CHAMAR O BOT?: \nVAI MAMAR O ADMIRO PRA GANHAR ADM? \nINSTAGRAN ? \nSALVA O NÚMERO DOS ADMS AE KARAY E AVISA NO PV! \n *___________________________*\nNÃO DESRESPEITE NENHUMA REGRAS!!`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `XAU, NÃO FOI UM PRAZER TER VC NESTE GRUPO... @${num.split('@')[0]}😔✌* \n_QUALQUER COISA MAMA O ADMIRO PRA VOLTAR ͡° ͜ʖ ͡°_`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'BELI_APIKEY_NYA'
			const vhtear = 'BELI_APIKEY_NYA'
			const tobz = 'BotWeA'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: ' 𝗣𝗥𝗢𝗖𝗘𝗦𝗦𝗔𝗡𝗗𝗢, 𝗣𝗙𝗩 𝗘𝗦𝗣𝗘𝗥𝗘',
				wait2: '[❗] 𝗣𝗥𝗢𝗖𝗘𝗦𝗦𝗔𝗡𝗗𝗢, 𝗣𝗙𝗩 𝗘𝗦𝗣𝗘𝗥𝗘',
				wait3: '[❗] Paciencia o tudo definitivamente vai se atrasar',
				wait4: '[❗] Queimador mudo sabar',
				success: '✔️ CONCLUÍDO ✔️',
				error: {
					stick: '❌Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '❌Este comando só pode ser usado em grupos! ❌',
					ownerG: '❌ 𝙀𝙨𝙩𝙚 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙎𝙤́ 𝙋𝙤𝙙𝙚 𝙎𝙚𝙧 𝙐𝙨𝙖𝙙𝙤 𝙋𝙚𝙡𝙤 𝙋𝙧𝙤𝙥𝙧𝙞𝙚𝙩𝙖́𝙧𝙞𝙤 𝘿𝙤 𝙂𝙧𝙪𝙥𝙤! ❌',
					ownerB: '❌𝘼𝙥𝙚𝙣𝙖𝙨 𝙈𝙚𝙪 𝘾𝙧𝙞𝙖𝙙𝙤𝙧 𝙋𝙤𝙙𝙚 𝙐𝙨𝙖𝙧 𝙀𝙨𝙩𝙚 𝘾𝙤𝙢𝙖𝙣𝙙𝙤= 𝙽𝚒𝚌𝚔𝚣𝚣𝚒𝚗 𝙶𝚘𝚍! ❌',
					admin: '❌ 𝙎𝙤́ 𝙐𝙢 𝘼𝙙𝙢 𝙋𝙤𝙙𝙚 𝙐𝙨𝙖𝙧 𝙀𝙨𝙩𝙚 𝘾𝙤𝙢𝙖𝙣𝙙𝙤! ❌',
					Badmin: '❌𝘽𝙤𝙩 𝙎𝙚𝙢 𝘼𝙙𝙢, 𝙄𝙢𝙥𝙤𝙨𝙨𝙞𝙫𝙚𝙡 𝘿𝙚 𝘾𝙤𝙣𝙘𝙡𝙪𝙞𝙧 𝙊 𝘾𝙤𝙢𝙖𝙣𝙙𝙤!! ❌'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["5512997277680@s.whatsapp.net"] // Ganti pake nomor lu
			const ramlanNumber = ["5512997277680@s.whatsapp.net"] // JANGAN DI UBAH NGENTOD
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isRamlan = ramlanNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				case 'help':
				case 'menu':
					client.sendMessage(from, help(prefix), text)
					break
				case 'donasi':
				case 'donate':
					client.sendMessage(from, donasi(prefix), text)
					break
				case 'info':
				case 'inf':
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*Número do bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Bloqueio total* : ${blocked.length}\n*O bot está ativo em* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
				case 'blockss':
					teks = 'CONTATOS BLOQUEADOS  KSKS :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'owner':
                case 'criador':
                  client.sendMessage(from, {displayname: "𝙉𝙄𝘽𝙊", vcard: vcard}, MessageType.contact, { quoted: mek})
               client.sendMessage(from, '𝙉𝙞𝙘𝙠𝙯𝙯𝙞𝙣 𝙂𝙤𝙙. <- 𝙈𝙚𝙪 𝘾𝙧𝙞𝙖𝙙𝙤𝙧 𝙋𝙙𝙥!!:*',MessageType.text, { quoted: mek} )
                break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('É só uma foto mano')
					}
					break
				case 'stiker':
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						await removeBackgroundFromImageFile({path: media, apiKey: vhtear, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					} else {
						reply(`𝗘𝗥𝗥𝗢 𝗔𝗢 𝗙𝗔𝗭𝗘𝗥 𝗔𝗗𝗘𝗦𝗜𝗩𝗢! 𝗠𝗔𝗡𝗗𝗔 𝗔 𝗙𝗢𝗧𝗢/𝗚𝗜𝗙 𝗖𝗢𝗠 𝗔 𝗟𝗘𝗚𝗘𝗡𝗗𝗔 ${prefix}sticker 𝗢𝗨 𝗙𝗔𝗭 𝗔 𝗠𝗔𝗥𝗖𝗔𝗖𝗔𝗢!`)
					}
					break
				case 'tts':
				case 'audio':
					if (args.length < 1) return client.sendMessage(from, 'Qual é o código da linguagem, tio?', text, {quoted: mek})
					const gtts = require('./R4ML4N/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto tio', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('A maior parte do texto é tio')
					: gtts.save(ranm, dtt, function() {
						client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				case 'meme':
				case 'memi':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
				case 'memind':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
				case 'prefixx':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
				case 'hilih':
					if (args.length < 1) return reply('𝘾𝙖𝙙𝙚̂ 𝙤 𝙩𝙚𝙭𝙩𝙤?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'ytmp3':
				case 'mpp3':
					if (args.length < 1) return reply('CADE O LINK MANO?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbar.tech/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytstalk':
					if (args.length < 1) return reply('O que você está procurando?? pau?')
					anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'tiktod':
					if (args.length < 1) return reply('Cadê o link, hum?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, '𝙀𝙧𝙧𝙤! 𝙑𝙘 𝙉𝙖̃𝙤 𝘾𝙤𝙡𝙤𝙘𝙤𝙪 𝙊 𝙉𝙤𝙢𝙚 𝘿𝙚 𝙐𝙨𝙪𝙖𝙧𝙞𝙤!', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `𝗜𝗗 : ${user.id}\n𝗡𝗢𝗠𝗘 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 : ${user.uniqueId}\n*𝗡𝗢𝗠𝗘* : ${user.nickname}\n𝗦𝗘𝗚𝗨𝗜𝗗𝗢𝗥𝗘𝗦 : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n𝗣𝗢𝗦𝗧𝗔𝗚𝗘𝗡𝗦 : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('𝙀𝙧𝙧𝙤! 𝙉𝙤𝙢𝙚 𝘿𝙚 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 𝙉𝙖̃𝙤 𝙀𝙭𝙞𝙨𝙩𝙚 𝙊𝙪 𝙀𝙨𝙩𝙖́ 𝙄𝙣𝙫𝙖́𝙡𝙞𝙙𝙤!!')
					}
					break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('O que você quer escrever? pau?')
					ramlan = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/write?text=${ramlan}&apikey=${vhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					break
				case 'ssweb':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('𝙀𝙧𝙧𝙤!!')
					if (!tipelist.includes(args[0])) return reply('Tipo desktop|tablet|celular')
					if (args.length < 2) return reply('𝙀𝙧𝙧𝙤')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'ttp':
				case 'tt0':
					if (args.length < 1) return reply('Onde está o texto??')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'tagall3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clearall':
				case 'clear':
					if (!isOwner) return reply('𝗤𝗨𝗘𝗠 𝗘 𝗩𝗖 𝗞𝗞𝗞𝗞𝗞?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('𝙏𝙤𝙙𝙤𝙨 𝙊𝙨 𝘾𝙝𝙖𝙩𝙨 𝙁𝙤𝙧𝙖𝙢 𝘿𝙚𝙡𝙚𝙩𝙖𝙙𝙤𝙨 𝘾𝙤𝙢 𝙎𝙪𝙘𝙚𝙨𝙨𝙤:)')
					break
				case 'bc':
					if (!isOwner) return reply('𝙌𝙪𝙚𝙢 𝙚́ 𝙩𝙪 𝙩𝙞𝙤?')
					if (!isRamlan) return reply(' ')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `⟪ *${Botz}* 𝑩𝑹𝑶𝑨𝑫𝑪𝑨𝑺𝑻 ⟫\n\n${body.slice(4)}`})
						}
						reply('𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖̃𝙤 𝙗𝙚𝙢 𝙨𝙪𝙘𝙚𝙙𝙞𝙙𝙖')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `⟪ *${Botz}* 𝗧𝗥𝗔𝗡𝗦𝗠𝗜𝗦𝗔𝗢 ⟫\n\n${body.slice(4)}`)
						}
						reply('𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖̃𝙤 𝙗𝙚𝙢 𝙨𝙪𝙘𝙚𝙙𝙞𝙙𝙖')
					}
					break
                                case 'promote':
                                case 'up':
                                case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Promovi esse carinha aki @${mentioned[0].split('@')[0]} Respeitem ele ok ksk!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
				case 'dpromover':
				case 'ex'
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Tirei O Adm do@${mentioned[0].split('@')[0]} Pateta kskskksksk!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
				case 'adc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
				case 'kick':
				case 'ban':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, emitidos, toma esse ban fdp🤬 :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'admin':
				case 'adms':
					if (!isGroup) return reply(mess.only.group)
					teks = `𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗧𝗢𝗗𝗢𝗦 𝗔𝗗𝗠𝗦 *${groupMetadata.subject}*\n𝗧𝗢𝗧𝗔𝗟 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                                case 'linkgrup':
                                case 'lgrupo':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        linkgc = await client.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'leave':
                                case 'saiir':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (isGroupAdmins || isOwner) {
                                            client.groupLeave(from)
                                        } else {
                                            reply(mess.only.admin)
                                        }
                                        break
                case 'hidetag':
                case 'tag':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isOwner) return reply('Lu quem tod?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
				case 'toimg':
				case 'timg':
					if (!isQuotedSticker) return reply('❌ 𝗘𝗥𝗥𝗢! MARCA A FIGURINHA AI KARAY PQP ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('𝗜𝗠𝗣𝗢𝗦𝗦𝗜𝗩𝗘𝗟! 𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗔 𝗙𝗜𝗚𝗨𝗥𝗔 𝗡 𝗘 𝗔𝗡𝗜𝗠𝗔𝗗𝗔!!')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('O texto está onde um?')
					teks = body.slice(5)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					if (anu.error) return reply('Simi ga tau kak ')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativado')
						samih.push(from)
						fs.writeFileSync('./R4ML4N/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./R4ML4N/simi.json', JSON.stringify(samih))
						reply('Desativado o modo simi com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'welcome':
				case 'bem-vindo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Já está ativo mano')
						welkom.push(from)
						fs.writeFileSync('./R4ML4N/welkom.json', JSON.stringify(welkom))
						reply('𝗠𝗢𝗗𝗢 [𝗕𝗢𝗔𝗦 𝗩𝗜𝗡𝗗𝗔𝗦] 𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./R4ML4N/welkom.json', JSON.stringify(welkom))
						reply('𝗠𝗢𝗗𝗢 [𝗕𝗢𝗔𝗦 𝗩𝗜𝗡𝗗𝗔𝗦] 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗢 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢')
					} else {
						reply('1 𝗣𝗔𝗥𝗔 𝗔𝗧𝗜𝗩𝗔𝗥 𝗕𝗢𝗔𝗦 𝗩𝗜𝗡𝗗𝗔𝗦 2 𝗣𝗔𝗥𝗔 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗥 𝗕𝗢𝗔𝗦 𝗩𝗜𝗡𝗗𝗔𝗦! ')
					}
                                      break
				case 'clone':
				case 'clon':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝗠𝗔𝗥𝗤𝗨𝗘 𝗔 𝗣𝗘𝗦𝗦𝗢𝗔 𝗣𝗙𝗩!')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`𝗙𝗢𝗧𝗢 𝗗𝗘 𝗣𝗘𝗥𝗙𝗜𝗟 𝗔𝗧𝗨𝗔𝗟𝗜𝗭𝗔𝗗𝗔 𝗣𝗔𝗥𝗔 𝗔 𝗙𝗢𝗧𝗢 𝗗𝗘 𝗣𝗘𝗥𝗙𝗜𝗟 𝗗𝗢 -> @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('𝗠𝗔𝗥𝗖𝗔 𝗔 𝗙𝗢𝗧𝗢 𝗢𝗨 𝗠𝗔𝗡𝗗𝗘 𝗖𝗢𝗠 𝗔 𝗟𝗘𝗚𝗘𝗡𝗗𝗔 ${prefix}Wait')
					}
					break
					//GABUT
					case 'apakah':
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Questão : *'+apakah+'*\n\nResponda : '+ kah, text, { quoted: mek })
					break
				case 'rate':
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Questão : *'+rate+'*\n\nResponda : '+ te+'%', text, { quoted: mek })
					break
				case 'watak':
					watak = body.slice(1)
					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Questão : *'+watak+'*\n\nResponda : '+ tak, text, { quoted: mek })
					break
				case 'hobby':
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Questão : *'+hobby+'*\n\nResponda : '+ by, text, { quoted: mek })
					break
				case 'bisakah':
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Questão : *'+bisakah+'*\n\nResponda : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Questão : *'+kapankah+'*\n\nResponda : '+ koh, text, { quoted: mek })
					break
				case 'truth':
					const trut =['Nunca gostei do mesmo. aja? Quão mais?','Se possível ou se você quiser, em gc/fora da gc, de quem você será amigo?(pode ser diferente/mesmo tipo)','Qual é o seu maior medo?','Sempre goste de alguém e sinta que essa pessoa também gosta de você?','Qual é o nome da ex-namorada do seu amigo de que você gostava secretamente? ',' Você já roubou o dinheiro da sua mãe ou do pai? O motivo?','o que te faz feliz quando você está triste','amor nunca não correspondido? se alguma vez com quem? como se sente, brou?','já teve um caso com alguém?','a coisa mais temida ',' quem é a pessoa mais influente em sua vida ',' o orgulho que você teve este ano ',' quem é a pessoa que pode fazer você se sentir desconfortável','quem é a pessoa que']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Verdade*\n\n'+ ttrth, quoted: mek })
					break
				case 'dare':
					const dare =['Envie uma mensagem para o seu ex e diga "eu ainda gosto de você','esmagar telefone/namorada agora e ss para o jogador','pap para um membro do grupo','Como "VOCÊ É TÃO BONITA, NÃO É AMIGÁVEL" para caras','ss chamada recente whatsapp','soltar a emoção "🦄💨" cada digitação em gc/pc por 1 dia','kirim nota de voz como posso chamá-lo de bebê?','faça uma cotação canção/citação, continue a marcar o membro apropriado para a cotação','use fotos da sola por até 3 dias','digite usando o idioma local 24 janeiro','mudar o nome para "Eu sou uma criança fofa, Luna" Durante 5 janeiro','conversar com os contatos e solicitar %batre você, continue dizendo a ele "eu tenho sorte de ter você','prank chat ex e dizer " eu te amo, pgn balikan','gravar voz ler surata al-kautsar','Como "Eu tenho uma queda por você, você quer ser meu namorado?" para o sexo oposto seu último bate-papo (passar em wa / tele), espere ele responder, se já ss deixa cair aqui','diga o tipo de sua namorada!','tirar / postar fotos de namorada / paixão','gritou gajelas então envie usando vn aqui','Faça um papinho na sua cara e envie para um de seus amigos','Envie sua foto com uma legenda, sou uma criança adotada', 'gritou com palavras ásperas enquanto Vn então a enviou aqui', 'gritou "anjimm gabutt anjimmm " na frente de sua casa','ganti nama jadi " BOWO " Durante 24 janeiro','Pura pura possuído, por exemplo : possuído por tigres, possuído por gafanhotos, possuído por geladeiras, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
//LOGO MAKER
case 'pornhub':
					var gh = body.slice(8)
					lan1 = gh.split("&")[0];
					lan2 = gh.split("&")[1];
					if (args.length < 1) return reply('𝗦𝗘𝗠 𝗢 𝗧𝗘𝗫𝗧𝗢. 𝗜𝗠𝗣𝗢𝗦𝗦𝗜𝗩𝗘𝗟 𝗗𝗘 𝗖𝗢𝗡𝗧𝗜𝗡𝗨𝗔𝗥')
					reply(mess.wait2)
					ramlan = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${lan1}&text2=${lan2}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek, caption: 'Pasti pemain bokep:v'})
					break
case 'hartatahta':
					var gh = body.slice(11)
					if (args.length < 1) return reply('CADE O TEXTO MANO?')
					reply('[❗] Hirti Tihti Tai Anjg :v')
					ramlan = await getBuffer(`https://api.vhtear.com/hartatahta?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'galaxytext':
					var gh = body.slice(11)
					if (args.length < 1) return reply('CADE O TEXTO MANO?')
					reply(mess.wait2)
					ramlan = await getBuffer(`https://api.vhtear.com/galaxytext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek, caption: 'Anjay bah'})
					break
case 'glitchtext':
					var gh = body.slice(11)
					lan1 = gh.split("&")[0];
					lan2 = gh.split("&")[1];
					if (args.length < 1) return reply('CADE O TEXTO MANO?')
					reply(mess.wait3)
					ramlan = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${lan1}&text2=${lan2}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'lovetext':
					var gh = body.slice(9)
					if (args.length < 1) return reply('CADE O TEXTO MANO?')
					reply(mess.wait4)
					ramlan = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'glowtext':
					var gh = body.slice(9)
					if (args.length < 1) return reply('CADE O TEXTO MANO?')
					reply(mess.wait2)
					ramlan = await getBuffer(`https://api.vhtear.com/glowtext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'gugeltext':
					var gh = body.slice(10)
					lan1 = gh.split("&")[0];
					lan2 = gh.split("&")[1];
					lan3 = gh.split("&")[2];
					if (args.length < 1) return reply('CADE O TEXTO MANO?')
					reply(mess.wait)
					ramlan = await getBuffer(`https://api.vhtear.com/googletext?text1=${lan1}&text2=${lan2}&text3=${lan3}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'bucintext':
					var gh = body.slice(10)
					if (args.length < 1) return reply('CADE O TEXTO MANO?')
					reply(mess.wait4)
					ramlan = await getBuffer(`https://api.vhtear.com/romancetext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'partytext':
					var gh = body.slice(10)
					if (args.length < 1) return reply('CADE O TEXTO MANO?')
					reply(mess.wait)
					ramlan = await getBuffer(`https://api.vhtear.com/partytext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'thundername':
					var gh = body.slice(12)
					if (args.length < 1) return reply('CADE O TEXTO MANO?')
					reply(mess.wait2)
					ramlan = await getBuffer(`https://api.vhtear.com/thundertext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek, caption: 'Nih tod :v'})
					break
//MENU COMLI

//
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
