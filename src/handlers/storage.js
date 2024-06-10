import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../lib/firebase.config";

const Storage = {
    uploadFile: (media) => {
        return new Promise(async resolve => {
            try {
              const mediaRef = ref(storage, `images/${media.title}`)
              uploadBytes(mediaRef, media.file).then(snapshot => {
                resolve({ path: snapshot.metadata.fullPath, name: media.title})
              })
            } catch (e) {
              console.error(e)
            }
        })
    },
    downloadFile: ( media ) => {
      return new Promise(async resolve => {
        try{
          const mediaRef = ref (storage, media.path);
          const fileUrl = await getDownloadURL(mediaRef)
          resolve(fileUrl)
        } catch(e){
          console.log(e)
        }
      })
    }
}
export default Storage