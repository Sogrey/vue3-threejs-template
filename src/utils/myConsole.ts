// 美化打印实现方法
const isProduction = import.meta.env.MODE === 'production';

const isEmpty = (value: string | null | undefined) => {
    return value == null || value === undefined || value === '';
};
const prettyPrint = (title:string, text:any, args: any[], color:string|number) => {
    if (isProduction) return;
    let argsText = "";
    let argsTextCss = [];
    if (Array.isArray(args) && args.length > 0) {
        for (let index = 0; index < args.length; index++) {
            const arg = args[index];
            argsText += `${arg}%c`;
            argsTextCss.push(
                `border:1px solid ${color}; padding: 1px 3px; border-radius: 2px; color: ${color}; margin-left: 3px; background-color: #ddd;`
            );
        }
    }
    console.log(
        `%c${title}%c${text}%c${argsText}`,
        `background:${color};border:1px solid ${color}; padding: 1px 3px; border-radius: 2px 0 0 2px; color: #fff;`,
        `border:1px solid ${color}; padding: 1px 3px; border-radius: 0 2px 2px 0; color: ${color};`,
        ...argsTextCss,
        "background:transparent"
    );
};
export const info = (textOrTitle:any, content:any="", ...args: any[]) => {
    const title = isEmpty(content) ? "Info" : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, args, "#909399");
};
export const error = (textOrTitle: any, content :any="", ...args: any[]) => {
    const title = isEmpty(content) ? "Error" : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, args, "#F56C6C");
};
export const warning = (textOrTitle: any, content:any="", ...args: any[]) => {
    const title = isEmpty(content) ? "Warning" : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, args, "#E6A23C");
};
export const success = (textOrTitle: any, content:any="", ...args: any[]) => {
    const title = isEmpty(content) ? "Success " : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, args, "#67C23A");
};
export const table = (data: any[]) => {
    let keys = [];
    if (Array.isArray(data)) {
        keys = Object.keys(data[0]);
    } else {
        keys = Object.keys(data);
    }

    let label_title = (data: any) => {
        let datas = keys.map((key) => {
            return `%c ${key} `;
        });
        return datas.join("");
    }
    let label_css = keys.map((key) => {
        return `color: white; background-color: black; padding: 2px 10px;`;
    })
    console.log(
        label_title(data),
        ...label_css
    );

    let table_data = (data: { [x: string]: any; }) => {
        let datas = keys.map((key) => {
            return `%c ${data[key]} `;
        });
        return datas.join("");
    }

    let table_css = keys.map((key) => {
        return `color: black; background-color: lightgray; padding: 2px 10px;`;
    })

    if (Array.isArray(data)) {
        data.forEach((row) => {
            console.log(
                table_data(row),
                ...table_css
            );
        });
    } else {
        console.log(
            table_data(data),
            ...table_css
        );
    }
};
export const picture = (url: string, scale = 1) => {
    if (isProduction) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        if (ctx) {
            c.width = img.width;
            c.height = img.height;
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.drawImage(img, 0, 0);
            const dataUri = c.toDataURL('image/png');

            console.log(
                `%c sup?`,
                `font-size: 1px;
                padding: ${Math.floor((img.height * scale) / 2)}px ${Math.floor((img.width * scale) / 2)}px;
                background-image: url(${dataUri});
                background-repeat: no-repeat;
                background-size: ${img.width * scale}px ${img.height * scale}px;
                color: transparent;
                `
            );
        }
    };
    img.src = url;
};