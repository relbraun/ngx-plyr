import { PlyrDriver, PlyrDriverCreateParams, PlyrDriverDestroyParams, PlyrDriverUpdateSourceParams } from './plyr-driver';
import * as Plyr from '@relbraun/plyr';

export class DefaultPlyrDriver implements PlyrDriver {

  create(params: PlyrDriverCreateParams) {
    return new Plyr(params.videoElement, params.options);
  }

  updateSource(params: PlyrDriverUpdateSourceParams) {
    params.plyr.source = params.source;
  }

  destroy(params: PlyrDriverDestroyParams) {
    params.plyr.destroy();
  }

}
