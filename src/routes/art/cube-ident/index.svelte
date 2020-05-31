<script context="module">
  import SketchCanvas from "../_SketchCanvas.svelte"
  import tome from "chromotome"
  import * as Three from "three"
  import getMaterial from "./getMaterial"

  export const settings = {
    context: "webgl",
    data: { backgroundColor: "#EFEEEE" }
  }

  const sketch = props => {
    const renderer = new Three.WebGLRenderer({
      canvas: props.context.canvas
    })

    renderer.setClearColor(props.data.backgroundColor, 1)

    const camera = new Three.OrthographicCamera()
    const scene = new Three.Scene()

    const geometry = new Three.BoxGeometry(1, 1, 1)
    // const material = new Three.MeshBasicMaterial({
    //   color: "red"
    // })
    const material = getMaterial()
    const mesh = new Three.Mesh(geometry, material)
    scene.add(mesh)

    return {
      resize({ pixelRatio, viewportWidth, viewportHeight }) {
        renderer.setPixelRatio(pixelRatio)
        renderer.setSize(viewportWidth, viewportHeight, false)
        const aspect = viewportWidth / viewportHeight

        const zoom = 1

        camera.left = -zoom * aspect
        camera.right = zoom * aspect
        camera.top = zoom
        camera.bottom = -zoom

        camera.near = -100
        camera.far = 100

        camera.position.set(zoom, zoom, zoom)
        camera.lookAt(new Three.Vector3())

        camera.updateProjectionMatrix()
      },
      render({ playhead, time }) {
        renderer.render(scene, camera)
      },
      unload() {
        renderer.dispose()
      }
    }
  }
</script>

<SketchCanvas {sketch} {settings} artworkId="sideways" />
