const fs = require('fs');

const PATH_FOLDER = '/home/runner/work/Diogenes199/Diogenes199/Img/';
const PATH_TEMPLATE = '/home/runner/work/Diogenes199/Diogenes199/src/README.md.tpl';
const PATH_README = '/home/runner/work/Diogenes199/Diogenes199/README.md';

(async () => {
    const [template] = await Promise.all([
        fs.promises.readFile(PATH_TEMPLATE, {encoding: "utf-8"}),
    ]);
    await fs.readdir(PATH_FOLDER, (err, files) => {
        if (err)
            console.log(err);
        else {
            var r = Math.floor(Math.random()*files.length);
            console.log("Cambio logo: "+files[r])
            const newMarkdown = template
                .replace("%{{logo_cat}}%", files[r]);
            fs.promises.writeFile(PATH_README, newMarkdown);

        }
    })
})();
