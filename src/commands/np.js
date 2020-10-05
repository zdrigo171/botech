module.exports = {
	name: 'tocando',
	description: 'Now playing command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('[+] No momento nada está tocando');
		return message.channel.send(`🎶 Tocando agora: **${serverQueue.songs[0].title}**`);
	}
};
