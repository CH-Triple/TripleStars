// ==========================
//        TripleBrawl
//           V0.1
//     Made by: chtriple
//    Discord: chtriple_yt
// ==========================
//         testmod
//           V0.1
// ==========================
//         BS-V60.4
// ==========================


// ==========================
const base = Module.getBaseAddress('laser');

const malloc = new NativeFunction(Module.getExportByName('libSystem.B.dylib', 'malloc'), 'pointer', ['uint']);
const free = new NativeFunction(Module.getExportByName('libSystem.B.dylib', 'free'), 'void', ['pointer']);
const tmpfile = new NativeFunction(Module.getExportByName('libSystem.B.dylib', 'tmpfile'), 'pointer', []);
const fopen = new NativeFunction(Module.getExportByName('libSystem.B.dylib', 'fopen'), 'pointer', ['pointer', 'pointer']);
const fwrite = new NativeFunction(Module.getExportByName('libSystem.B.dylib', 'fwrite'), 'int', ["pointer", "int", "int", "pointer"]);
const fseek = new NativeFunction(Module.getExportByName('libSystem.B.dylib', 'fseek'), 'int', ["pointer", "int", "int"]);
const ftell = new NativeFunction(Module.getExportByName('libSystem.B.dylib', 'ftell'), 'int', ["pointer"]);
const fread = new NativeFunction(Module.getExportByName('libSystem.B.dylib', 'fread'), 'int', ["pointer", "int", "int", "pointer"]);
const fclose = new NativeFunction(Module.getExportByName('libSystem.B.dylib', 'fclose'), 'void', ["pointer"]);
const strlen = new NativeFunction(Module.getExportByName('libSystem.B.dylib', 'strlen'), 'int', ["pointer"]);
// ==========================

