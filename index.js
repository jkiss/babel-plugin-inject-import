/* 
 * @Author: Nokey 
 * @Date: 2021-12-09 17:10:47 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-12-13 10:26:58
 */

module.exports =  function({ types: t, template }) {
    return {
        visitor: {
            // visitor contents
            Program(path, state) {
                state.opts.inject.map(opt=>{
                    if(state.filename.indexOf(opt.file) < 0)
                        return

                    let temp_import, vars
                    if(!!opt.name){
                        temp_import = template(`import NAME from 'PATH'`)
                        vars = {
                            NAME: opt.name,
                            PATH: opt.path
                        }
                    }else{
                        temp_import = template(`import 'PATH'`)
                        vars = {
                            PATH: opt.path
                        }
                    }

                    const last_import = path.get('body').filter(e=>e.isImportDeclaration()).pop()

                    if(last_import) last_import.insertAfter(temp_import({
                        ...vars
                    }))

                    console.log('Program', opt)
                })
            }
        }
    }
}