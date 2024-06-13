import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

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
