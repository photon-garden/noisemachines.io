import pkgDir from 'pkg-dir'
import path from 'path'

const packageDirectory = pkgDir.sync(path.resolve())

export default (...segments) => path.join(packageDirectory, ...segments)
