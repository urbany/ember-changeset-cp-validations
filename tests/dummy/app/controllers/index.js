import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @action submit(changeset) {
    return changeset.save();
  }

  @action rollback(changeset) {
    return changeset.rollback();
  }
}
