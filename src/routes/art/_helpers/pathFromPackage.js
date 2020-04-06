import pkgDir from 'pkg-dir'
import path from 'path'

const packageDirectory = pkgDir.sync(__dirname)

export default (...segments) => path.join(packageDirectory, ...segments)
