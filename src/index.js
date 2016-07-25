/**
 * Created by danielhollcraft on 7/25/16.
 */

function start (callback) {
  callback('Hello node starter')
}

start((msg) => {
  console.log(msg);
});


