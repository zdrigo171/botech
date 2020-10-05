module.exports = {
	name: 'parar',
	description: 'Stop command.',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Você precisa estar em um canal para eu parar uma música');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Não tem nada tocando para eu parar.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Música parada com sucesso!');
	}
};
