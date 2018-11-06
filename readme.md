# Spawn child process problem on macOs 
start: 

Linux, macOS:
1) ```NODE_ENV=debug node test.js``` (Linux, macOS)

Windows:
1) ``` set NODE_ENV=debug ```

2) ```node test.js```

Normal output: 
```
NODE_ENV: debug
hello world!!!

test2.js: process.env.NODE_ENV:  debug

goodbye!
```

when start this on macOs, it fails on line:
 
```const childProc = spawn('node',[path.resolve(__dirname,'test2.js')],{env:{NODE_ENV:'some_new_env'}});```

with the following error:

```
Error: spawn node ENOENT
    at Process.ChildProcess._handle.onexit (internal/child_process.js:232:19)
    at onErrorNT (internal/child_process.js:407:16)
    at process._tickCallback (internal/process/next_tick.js:63:19)
    at Function.Module.runMain (internal/modules/cjs/loader.js:744:11)
    at startup (internal/bootstrap/node.js:285:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)
Emitted 'error' event at:
    at Process.ChildProcess._handle.onexit (internal/child_process.js:238:12)
    at onErrorNT (internal/child_process.js:407:16)
    [... lines matching original stack trace ...]
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)
```
NodeJS version: 10.13.0(tried on earlier versions 8.*.* and 9.*.* ) - still the same problem

works fine on OS:
1) [x] Windows 10 (10.0.15063) 
2) [X] Ubuntu 16.10
3) [ ] MacOs HighSierra (10.13.6) and MacOs Mojave(10.14)</span>

unfortunately cannot start this process working on macOS(tried on HighSierra and Mojave), 

However, when you replace line #10 with the following, program will work, but NODE_ENV will be undefined:
```const childProc = spawn('node',[path.resolve(__dirname,'test2.js')]);```
