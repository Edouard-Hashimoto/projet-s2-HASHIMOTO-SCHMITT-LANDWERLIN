import PocketBase from 'pocketbase'

const pb = new PocketBase('https://lazydocs.edouardhashimoto.fr:443')

export default {
  async getTutos() {
    try {
      const records = await pb.collection('tuto').getFullList({
        sort: '-created'
      })
      return records
    } catch (error) {
      console.error('Error fetching tutos:', error)
      return []
    }
  }
}
