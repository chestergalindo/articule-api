const MongoLib = require('../lib/mongo');

class articuleService {
  constructor() {
    this.collections = 'articules';
    this.mongoDB = new MongoLib();
  }

  async getArticules({tags}) {
    const query = tags && {tags:{$in:tags}};
    const articules = await this.mongoDB.getAll(this.collections, query);
    return articules || [];
  }

  async getArticule({articuleId}) {
    const articule = await this.mongoDB.get(this.collections, articuleId);
    return articule || {};
  }

  async createArticule({articule}) {
    const createArticuleId = await this.mongoDB.create(this.collections, articule);
    return createArticuleId;
  }

  async patchedArticule() {
    const patchedArticuleId = await Promise.resolve(dataMock[0]);
    return patchedArticuleId || {};
  }

  async updatedArticule({articuleId, articule}={}) {
    const updatedArticuleId = await this.mongoDB.create(this.collections, articuleId, articule);
    return updatedArticuleId;
  }

  async deletedArticule({articuleId}) {
    const deletedArticuleId = await this.mongoDB.delete(this.collections, articuleId);
    return deletedArticuleId;
  }
}

module.exports = articuleService;
