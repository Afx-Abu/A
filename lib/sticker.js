const Jsl_0x28e4c8=Jsl_0x1ca2;(function(_0x33b7f9,_0x354b29){const _0xf56dda=Jsl_0x1ca2,_0x89048f=_0x33b7f9();while(!![]){try{const _0x130ae8=-parseInt(_0xf56dda(0x18d))/0x1*(-parseInt(_0xf56dda(0x17b))/0x2)+-parseInt(_0xf56dda(0x16b))/0x3+parseInt(_0xf56dda(0x18c))/0x4+parseInt(_0xf56dda(0x194))/0x5*(-parseInt(_0xf56dda(0x16c))/0x6)+-parseInt(_0xf56dda(0x174))/0x7+parseInt(_0xf56dda(0x16f))/0x8*(parseInt(_0xf56dda(0x166))/0x9)+parseInt(_0xf56dda(0x176))/0xa;if(_0x130ae8===_0x354b29)break;else _0x89048f['push'](_0x89048f['shift']());}catch(_0x24f17d){_0x89048f['push'](_0x89048f['shift']());}}}(Jsl_0x528e,0xb69e2));const fs=require('fs'),{tmpdir}=require('os'),Crypto=require('crypto'),ff=require(Jsl_0x28e4c8(0x190)),webp=require(Jsl_0x28e4c8(0x173)),path=require(Jsl_0x28e4c8(0x184));async function imageToWebp(_0x4a3b55){const _0x5814e8=Jsl_0x28e4c8,_0x4ba61d=path[_0x5814e8(0x191)](tmpdir(),Crypto['randomBytes'](0x6)[_0x5814e8(0x189)](0x0,0x6)[_0x5814e8(0x175)](0x24)+'.webp'),_0x3539b3=path[_0x5814e8(0x191)](tmpdir(),Crypto[_0x5814e8(0x186)](0x6)[_0x5814e8(0x189)](0x0,0x6)[_0x5814e8(0x175)](0x24)+_0x5814e8(0x17e));fs[_0x5814e8(0x199)](_0x3539b3,_0x4a3b55),await new Promise((_0x1a2dae,_0x1cb2d7)=>{const _0x7862a0=_0x5814e8;ff(_0x3539b3)['on']('error',_0x1cb2d7)['on'](_0x7862a0(0x172),()=>_0x1a2dae(!![]))[_0x7862a0(0x18b)](['-vcodec',_0x7862a0(0x196),_0x7862a0(0x18f),_0x7862a0(0x177)])[_0x7862a0(0x197)](_0x7862a0(0x181))['save'](_0x4ba61d);});const _0x1df0c4=fs[_0x5814e8(0x18e)](_0x4ba61d);return fs['unlinkSync'](_0x4ba61d),fs[_0x5814e8(0x187)](_0x3539b3),_0x1df0c4;}function Jsl_0x1ca2(_0x46b88f,_0x5f3f62){const _0x528e60=Jsl_0x528e();return Jsl_0x1ca2=function(_0x1ca268,_0x192c8f){_0x1ca268=_0x1ca268-0x166;let _0x5876e6=_0x528e60[_0x1ca268];return _0x5876e6;},Jsl_0x1ca2(_0x46b88f,_0x5f3f62);}async function videoToWebp(_0x477046){const _0x3eec52=Jsl_0x28e4c8,_0x250fc3=path[_0x3eec52(0x191)](tmpdir(),Crypto[_0x3eec52(0x186)](0x6)[_0x3eec52(0x189)](0x0,0x6)[_0x3eec52(0x175)](0x24)+_0x3eec52(0x183)),_0x4f9cf2=path[_0x3eec52(0x191)](tmpdir(),Crypto['randomBytes'](0x6)[_0x3eec52(0x189)](0x0,0x6)[_0x3eec52(0x175)](0x24)+_0x3eec52(0x193));fs[_0x3eec52(0x199)](_0x4f9cf2,_0x477046),await new Promise((_0x3add37,_0x2624cb)=>{const _0x372713=_0x3eec52;ff(_0x4f9cf2)['on'](_0x372713(0x170),_0x2624cb)['on'](_0x372713(0x172),()=>_0x3add37(!![]))[_0x372713(0x18b)]([_0x372713(0x188),_0x372713(0x196),_0x372713(0x18f),'scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse','-loop','0','-ss',_0x372713(0x17f),'-t',_0x372713(0x179),_0x372713(0x198),_0x372713(0x167),_0x372713(0x171),_0x372713(0x195),'0'])[_0x372713(0x197)](_0x372713(0x181))['save'](_0x250fc3);});const _0x27aa85=fs['readFileSync'](_0x250fc3);return fs['unlinkSync'](_0x250fc3),fs[_0x3eec52(0x187)](_0x4f9cf2),_0x27aa85;}async function writeExifImg(_0x3a4a56,_0x10c113){const _0x567f42=Jsl_0x28e4c8;let _0x596e8b=await imageToWebp(_0x3a4a56);const _0x3f788e=path[_0x567f42(0x191)](tmpdir(),Crypto[_0x567f42(0x186)](0x6)['readUIntLE'](0x0,0x6)['toString'](0x24)+'.webp'),_0x5b8237=path[_0x567f42(0x191)](tmpdir(),Crypto[_0x567f42(0x186)](0x6)['readUIntLE'](0x0,0x6)[_0x567f42(0x175)](0x24)+_0x567f42(0x183));fs[_0x567f42(0x199)](_0x3f788e,_0x596e8b);if(_0x10c113[_0x567f42(0x16a)]||_0x10c113[_0x567f42(0x18a)]){const _0x243bb4=new webp[(_0x567f42(0x16e))](),_0x59d2d8={'sticker-pack-id':_0x567f42(0x17a),'sticker-pack-name':_0x10c113['packname'],'sticker-pack-publisher':_0x10c113['author'],'emojis':_0x10c113[_0x567f42(0x16d)]?_0x10c113[_0x567f42(0x16d)]:['']},_0x3219e4=Buffer[_0x567f42(0x182)]([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0x3c1b11=Buffer['from'](JSON[_0x567f42(0x169)](_0x59d2d8),_0x567f42(0x17d)),_0x5e8d0d=Buffer['concat']([_0x3219e4,_0x3c1b11]);return _0x5e8d0d[_0x567f42(0x19d)](_0x3c1b11[_0x567f42(0x168)],0xe,0x4),await _0x243bb4[_0x567f42(0x185)](_0x3f788e),fs[_0x567f42(0x187)](_0x3f788e),_0x243bb4[_0x567f42(0x19c)]=_0x5e8d0d,await _0x243bb4[_0x567f42(0x19b)](_0x5b8237),_0x5b8237;}}async function writeExifVid(_0x2edbb9,_0x3e6bb6){const _0x3e425d=Jsl_0x28e4c8;let _0x154637=await videoToWebp(_0x2edbb9);const _0x3eff24=path['join'](tmpdir(),Crypto[_0x3e425d(0x186)](0x6)['readUIntLE'](0x0,0x6)[_0x3e425d(0x175)](0x24)+'.webp'),_0x4ed5c9=path['join'](tmpdir(),Crypto[_0x3e425d(0x186)](0x6)[_0x3e425d(0x189)](0x0,0x6)[_0x3e425d(0x175)](0x24)+_0x3e425d(0x183));fs[_0x3e425d(0x199)](_0x3eff24,_0x154637);if(_0x3e6bb6[_0x3e425d(0x16a)]||_0x3e6bb6[_0x3e425d(0x18a)]){const _0x1744c7=new webp[(_0x3e425d(0x16e))](),_0x1c9fc1={'sticker-pack-id':_0x3e425d(0x17a),'sticker-pack-name':_0x3e6bb6[_0x3e425d(0x16a)],'sticker-pack-publisher':_0x3e6bb6['author'],'emojis':_0x3e6bb6[_0x3e425d(0x16d)]?_0x3e6bb6[_0x3e425d(0x16d)]:['']},_0x4da14e=Buffer[_0x3e425d(0x182)]([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0x504fcf=Buffer[_0x3e425d(0x182)](JSON[_0x3e425d(0x169)](_0x1c9fc1),_0x3e425d(0x17d)),_0x7b6a6e=Buffer[_0x3e425d(0x19a)]([_0x4da14e,_0x504fcf]);return _0x7b6a6e[_0x3e425d(0x19d)](_0x504fcf[_0x3e425d(0x168)],0xe,0x4),await _0x1744c7[_0x3e425d(0x185)](_0x3eff24),fs[_0x3e425d(0x187)](_0x3eff24),_0x1744c7['exif']=_0x7b6a6e,await _0x1744c7[_0x3e425d(0x19b)](_0x4ed5c9),_0x4ed5c9;}}async function writeExif(_0x246ed5,_0x260285){const _0xcdb37=Jsl_0x28e4c8;let _0x428d98=/webp/[_0xcdb37(0x192)](_0x246ed5[_0xcdb37(0x178)])?_0x246ed5['data']:/image/['test'](_0x246ed5[_0xcdb37(0x178)])?await imageToWebp(_0x246ed5[_0xcdb37(0x17c)]):/video/['test'](_0x246ed5[_0xcdb37(0x178)])?await videoToWebp(_0x246ed5[_0xcdb37(0x17c)]):'';const _0x52f39=path[_0xcdb37(0x191)](tmpdir(),Crypto[_0xcdb37(0x186)](0x6)['readUIntLE'](0x0,0x6)[_0xcdb37(0x175)](0x24)+_0xcdb37(0x183)),_0x3cbc81=path[_0xcdb37(0x191)](tmpdir(),Crypto[_0xcdb37(0x186)](0x6)[_0xcdb37(0x189)](0x0,0x6)[_0xcdb37(0x175)](0x24)+_0xcdb37(0x183));fs[_0xcdb37(0x199)](_0x52f39,_0x428d98);if(_0x260285[_0xcdb37(0x16a)]||_0x260285[_0xcdb37(0x18a)]){const _0x1ceb2d=new webp['Image'](),_0x1dd7d1={'sticker-pack-id':'https://github.com/Afx-Abu/Abu-MD','sticker-pack-name':_0x260285['packname'],'sticker-pack-publisher':_0x260285[_0xcdb37(0x18a)],'emojis':_0x260285['categories']?_0x260285[_0xcdb37(0x16d)]:['']},_0x5b372c=Buffer['from']([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0x43415c=Buffer[_0xcdb37(0x182)](JSON[_0xcdb37(0x169)](_0x1dd7d1),_0xcdb37(0x17d)),_0x3a2b3e=Buffer[_0xcdb37(0x19a)]([_0x5b372c,_0x43415c]);return _0x3a2b3e[_0xcdb37(0x19d)](_0x43415c[_0xcdb37(0x168)],0xe,0x4),await _0x1ceb2d['load'](_0x52f39),fs[_0xcdb37(0x187)](_0x52f39),_0x1ceb2d[_0xcdb37(0x19c)]=_0x3a2b3e,await _0x1ceb2d['save'](_0x3cbc81),_0x3cbc81;}}module[Jsl_0x28e4c8(0x180)]={'imageToWebp':imageToWebp,'videoToWebp':videoToWebp,'writeExifImg':writeExifImg,'writeExifVid':writeExifVid,'writeExif':writeExif};function Jsl_0x528e(){const _0x5fedd4=['writeFileSync','concat','save','exif','writeUIntLE','45gLNWWz','default','length','stringify','packname','2134770VqkfkR','60svNRnd','categories','Image','942488YyDTih','error','-an','end','node-webpmux','1710527NjFyMO','toString','7980850zbVaYD','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse','mimetype','00:00:05','https://github.com/Afx-Abu/Abu-MD','20hqIVHJ','data','utf-8','.jpg','00:00:00','exports','webp','from','.webp','path','load','randomBytes','unlinkSync','-vcodec','readUIntLE','author','addOutputOptions','878372YAQxFy','124021pdUapP','readFileSync','-vf','fluent-ffmpeg','join','test','.mp4','571495KLnfuE','-vsync','libwebp','toFormat','-preset'];Jsl_0x528e=function(){return _0x5fedd4;};return Jsl_0x528e();}