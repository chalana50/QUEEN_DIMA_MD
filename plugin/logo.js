case 'flamingtext': {
    if (coinn < 1) return LilyReply(mess.coin);

    const models = {
        'fluffy-logo': 'fluffy-logo',
        'lava-logo': 'lava-logo',
        'cool-logo': 'cool-logo',
        'comic-logo': 'comic-logo',
        'fire-logo': 'fire-logo',
        'water-logo': 'water-logo',
        'ice-logo': 'ice-logo',
        'elegant-logo': 'elegant-logo',
        'gold-logo': 'gold-logo',
        'blue-logo': 'blue-logo',
        'silver-logo': 'silver-logo',
        'neon-logo': 'neon-logo',
        'skate-name': 'skate-name',
        'retro-logo': 'retro-logo',
        'candy-logo': 'candy-logo',
        'glossy-logo': 'glossy-logo'
    };

    const modelList = Object.keys(models).map(model => `> ${model}`).join('\n');

    if (!text) {
        return LilyReply(`Penggunaan: ${prefix + command} Model | Text\n\n${modelList}`);
    }

    let response = args.join(' ').split('|');
    if (!response[0] || !response[1]) {
        return LilyReply('• *Example :* .flamingtext water-logo | tanakadomp');
    }

    const model = response[0].trim();
    const textInput = response[1].trim();

    if (!models[model]) {
        return LilyReply(`Model tidak valid. Pilih dari:\n${modelList}`);
    }

    lilychan.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });

    const res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=${models[model]}&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(textInput)}`;

    lilychan.sendFile(m.chat, res, 'lilyanjay.jpg', mess.done, m, false);
    await usecoin(m.sender, "1");
}
break;
