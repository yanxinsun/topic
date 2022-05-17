const fs = require('fs')
const PDFParser = require('pdf2json')
const xlsx = require('node-xlsx')

class ReadPdfController {
    //读取pdf文件

    async readFile2(ctx, next) {

        const file = ctx.request.files.file;

        var pdfFilePath = file.path
        if (fs.existsSync(pdfFilePath)) {

            var pdfParser = new PDFParser(pdfFilePath, 1);

            const filename = pdfParser.loadPDF(pdfFilePath);
            console.log(filename)


            pdfParser.on("pdfParser_dataError", errData => console.log(errData.parserError))
            pdfParser.on("pdfParser_dataReady", pdfData => {
                console.log("step 3")
                //读取PDF，转换成TXT文本内容
                let dataTXT = pdfParser.getRawTextContent()
                //正则：删除空白字符和.符号
                let dataTXTs = dataTXT.replaceAll(/----------------Page \(.*\) Break----------------/gi, '')
                let dataTXTs2 = dataTXTs.replaceAll(/(^\s*)|(\s*$)/g,'')

                
                // console.log('datatxt',dataTXTs)
                fs.writeFile('./test.txt',dataTXTs2,function(err){
                    if(err)  console.log('写入失败',err)
                })
                // //正则：匹配并返回号码、账期、发票金额
                // let dataTarget = dataTXTs.match(/(?<=(号码.|帐期.|￥))[0-9]*/g)

                // //构造新文件名，根据手机号码匹配姓名
                // console.log(dataTarget[4])
                // Object.keys(number).forEach((key) => {
                //     if (key == dataTarget[4]) {
                //         let newPath = `${dir}/${dataTarget[3]}_${dataTarget[4]}_${number[key]}.pdf`
                //         //fs内置模块重命名文件
                //         fs.rename(oldPath, newPath, (error) => {
                //             if (error) throw error
                //             console.log("step 4")
                //             console.log('重命名成功')
                //         })
                //     }
                // })

                // //将结果写到xlsx表格中，注意这里会重复写需要优化
                // tableObj[0].data.push(dataTarget)
                // console.log("step 7")
                // console.log(tableObj)
                // let dataTargetBuffer = xlsx.build(tableObj)
                // fs.writeFileSync('./dataTarget.xlsx', dataTargetBuffer, 'binary')
            })


        }
    }

}


module.exports = new ReadPdfController()