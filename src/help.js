const help = (prefix) => {
	return `> *Sticker Commands* <
comandos : *${prefix}sticker* or *${prefix}stiker*
desc : converter imagem/gif/video para sticker
uso : resposta imagem/gif/video, ou enviar imagem/gif/video with caption\n
comandos : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em sticker while removendo o fundo
uso : resposta imagem, ou enviar imagem with caption\n
comandos : *${prefix}toimg*
desc : converter sticker para a imagem
uso : resposta sticker\n
comandos : *${prefix}tsticker* or *${prefix}tstiker*
desc : convert text to sticker
uso : *${prefix}tsticker text in here*\n
> *Meme Comandos* <
comandos : *${prefix}meme*
desc : imagens aleatórias de meme [english]
uso : apenas envie o comando \n
comandos : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
uso : apenas envie o comando\n
> *Outros comandos* <
comandos : *${prefix}gtts*
desc : converter texto em fala/audio
uso : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
comandos : *${prefix}loli*
desc : imagens aleatórias de loli
uso : apenas envie o comando\n
comandos : *${prefix}nsfwloli*
desc : imagens aleatoria de nsfw loli
uso : apenas envie o comando\n
comandos : *${prefix}url2img*
desc : tirar screenshots da web
uso : *${prefix}url2img [tipe] [url]*\n
comandos : *${prefix}simi*
desc : sua mensagem será respondida por simi
uso : *${prefix}simi sua mensagem*\n
comandos : *${prefix}ocr*
desc : take the text in the picture
uso : reply image, or send image with caption\n
comandos : *${prefix}wait*
desc : search anime with image [ What Anime Is This/That ]
uso : reply image, or send image with caption\n
comandos: * $ {prefix} setprefix *
desc: substituir prefixo
uso: * $ {prefix} setprefix [texto | opcional] *\ nexemplo: * $ {prefix} setprefix? *
nota: este comando só pode ser usado pelo proprietário do bot\n
> * Grupo comandos * <
comandos: * $ {prefix} add *
desc: adicionar membro ao grupo
uso: * $ {prefix} add 62813xxxxx *\n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n
comandos: * $ {prefix} kick *
desc: expulsar membros do grupo
uso: * $ {prefix} kick @ tagmember *\n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n
comandos: * $ {prefix} promova *
desc: tornar o membro do grupo como administrador do grupo
uso: * $ {prefix} promova @ tagmember *\n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n
comandos: * $ {prefix} rebaixar *
desc: tornar o administrador do grupo como membro do grupo
uso: * $ {prefix} rebaixar @ tagmember *\n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n
comandos : *${prefix}linkgroup*
desc : pegue o link do grupo
uso : apenas envie o comando
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n
comandos: * $ {prefix} licença *
desc: fazer o bot sair do grupo
uso: basta enviar o comando
nota: só pode ser usado por administradores de grupo e proprietário do bot\n
comandos : *${prefix}tagall*
desc : marcar todos os menbros do grupo, incluindo adms também
uso : apenas envie o comando
nota: este comando pode ser usadob se você for um administrador de grupo\n
comandos: * $ {prefix} simih *
desc: ativa o modo simi no grupo
uso: * $ {prefix} simih 1 * para ativar o modo simi e * $ {prefix} simih 0 * para desativar o modo simi
nota: este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
