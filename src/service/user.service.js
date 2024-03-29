/**
 * 用户实体操作类，专注业务逻辑
 */
import BaseService from './base.service';

export default class UserService extends BaseService {
  async test() {
    return this.modelEntity.findAll();
  }

  async findOneByUserName(username) {
    return this.modelEntity.findOne({
      raw: true,
      where: {
        username
      }
    });
  }

  async findAllUser() {
    return this.modelEntity.findAll({
      raw: true
    });
  }
}
