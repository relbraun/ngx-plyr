import { PlyrDriver, PlyrDriverCreateParams, PlyrDriverDestroyParams, PlyrDriverUpdateSourceParams } from 'ngx-plyr';
import * as Plyr from '@relbraun/plyr';


export class CustomPlyrDriver implements PlyrDriver {



  create(params: PlyrDriverCreateParams) {
    params.options = {debug: true} ;

    return new Plyr(params.videoElement, params.options);
  }

  updateSource(params: PlyrDriverUpdateSourceParams) {
    params.plyr.source = params.source;
  }

  destroy(params: PlyrDriverDestroyParams) {
    params.plyr.destroy();
  }
}
