const h=require("http"),fs=require("fs"),p=require("path");
h.createServer((q,r)=>{
 if(q.method==="POST"){let b=[];q.on("data",c=>b.push(c));q.on("end",()=>{const n=q.url.slice(1);fs.writeFileSync(p.join("..","shots",n+".png"),Buffer.from(JSON.parse(Buffer.concat(b).toString()).d.split(",")[1],"base64"));r.end("ok")});return}
 const f=p.join(process.cwd(),decodeURIComponent(q.url.split("?")[0]));
 fs.readFile(f,(e,d)=>{if(e){r.statusCode=404;return r.end()}r.setHeader("Content-Type",f.endsWith(".js")?"text/javascript":f.endsWith(".html")?"text/html":"application/pdf");r.end(d)})}).listen(8765);
