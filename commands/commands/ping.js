/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Vajira-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

//---------------------------------------------------------------------------
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    
         async(Void, citel) => {

        var inital = new Date().getTime();

        const { key } = await Void.sendMessage(citel.chat, {text: '```Testing Ping...```'});

        var final = new Date().getTime();

        await Pmd.sleep(1000)

       const pg = await Void.sendMessage(citel.chat, {text: '📍 *Ping:' + (final - inital) + ' ms* ', edit: key});
      return await Void.sendMessage(citel.chat, { react: { text: '✔️', key: pg.key } });
    }
);
