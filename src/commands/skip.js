module.exports = {
	name: 'pular',
	description: 'Skip command.',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Você precisa estar em um canal para eu pular uma música');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Não tem nada tocando para eu pular.');
		serverQueue.connection.dispatcher.end('Comando Skip usado com sucesso!');
	}
};
