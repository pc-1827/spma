"use strict";exports.id=780,exports.ids=[780],exports.modules={99:(e,i,n)=>{n.r(i),n.d(i,{Link:()=>m});var a=n(88290),t=n(17225),r=n(42996),d=n.n(r),u=n(59248),l=n(83245),o=n(36255);let m=(0,t.forwardRef)(({children:e,href:i,className:n,...t},r)=>{let m=(0,u.usePathname)()===i;return(0,a.jsxs)(d(),{href:i,ref:r,className:(0,o.cn)(m?"font-semibold text-primary":"","flex gap-1 transition-all relative",n),...t,children:[m?a.jsx(l.Z,{className:"absolute right-full"}):null," ",e]})})},97838:(e,i,n)=>{n.d(i,{fetchGraphqlStatic:()=>t});var a=n(59599);async function t({document:e,variables:i,config:n,token:t,apiSecret:r,url:d="http://api.spma.pc-1827.online/graphql"}){let u=(0,a.print)(e);return await fetch(d,{method:"POST",headers:{"Content-Type":"application/json",...t?{Authorization:`Bearer ${t}`}:null,...r?{"X-API-Secret":r}:null},body:JSON.stringify({query:u,variables:i}),...n}).then(async e=>{let{data:i,errors:n}=await e.json();return n?(console.log("Error",JSON.stringify(n)),{error:JSON.stringify(n[0].message)}):{data:i}})}},20829:(e,i,n)=>{n.d(i,{fetchGraphQLServer:()=>r});var a=n(97054),t=n(97838);async function r({document:e,variables:i,apiSecret:n,config:r}){let d=(0,a.cookies)(),u=d.get("next-auth.session-token")?.value||"";return(0,t.fetchGraphqlStatic)({document:e,apiSecret:n,config:r,variables:i,token:u})}},71583:(e,i,n)=>{n.d(i,{H:()=>r});var a=n(95292),t=n(36497);async function r({document:e,variables:i,apiSecret:n,config:r}){let d=(0,a.cookies)(),u=d.get("next-auth.session-token")?.value||"";return(0,t.x)({document:e,apiSecret:n,config:r,variables:i,token:u})}},79278:(e,i,n)=>{var a,t,r,d,u,l,o,m,s,c,k,v;n.d(i,{AuthProviderType:()=>a,CreateDistributorDocument:()=>g,CreateInventoryDocument:()=>S,CreateManufacturerDocument:()=>y,CreateRetailerDocument:()=>D,LoginDocument:()=>N,RegisterWithProviderDocument:()=>I,UserDocument:()=>f,namedOperations:()=>p}),function(e){e.Credentials="CREDENTIALS",e.Google="GOOGLE"}(a||(a={})),function(e){e.CreatedAt="createdAt",e.Uid="uid",e.UpdatedAt="updatedAt"}(t||(t={})),function(e){e.CreatedAt="createdAt",e.Id="id",e.ProductId="productId",e.Quantity="quantity",e.UpdatedAt="updatedAt",e.WarehouseId="warehouseId"}(r||(r={})),function(e){e.Address="address",e.Id="id",e.Latitude="latitude",e.Longitude="longitude",e.WarehouseId="warehouseId"}(d||(d={})),function(e){e.CreatedAt="createdAt",e.Uid="uid",e.UpdatedAt="updatedAt"}(u||(u={})),function(e){e.CreatedAt="createdAt",e.Description="description",e.Id="id",e.Image="image",e.ManufacturerId="manufacturerId",e.Name="name",e.UpdatedAt="updatedAt"}(l||(l={})),function(e){e.Default="default",e.Insensitive="insensitive"}(o||(o={})),function(e){e.CreatedAt="createdAt",e.Uid="uid",e.UpdatedAt="updatedAt"}(m||(m={})),function(e){e.Asc="asc",e.Desc="desc"}(s||(s={})),function(e){e.CreatedAt="createdAt",e.FromWarehouseId="fromWarehouseId",e.Id="id",e.ProductId="productId",e.Quantity="quantity",e.ToWarehouseId="toWarehouseId",e.UpdatedAt="updatedAt"}(c||(c={})),function(e){e.CreatedAt="createdAt",e.Image="image",e.Name="name",e.Uid="uid",e.UpdatedAt="updatedAt"}(k||(k={})),function(e){e.CreatedAt="createdAt",e.Description="description",e.DistributorId="distributorId",e.Id="id",e.ManufacturerId="manufacturerId",e.Name="name",e.RetailerId="retailerId",e.UpdatedAt="updatedAt"}(v||(v={}));let p={Query:{user:"user",Manufacturer:"Manufacturer",distributor:"distributor",retailer:"retailer",myWarehouses:"myWarehouses",warehouse:"warehouse",myProducts:"myProducts",product:"product"},Mutation:{Login:"Login",registerWithProvider:"registerWithProvider",registerWithCredentials:"registerWithCredentials",createManufacturer:"createManufacturer",createWarehouse:"createWarehouse",createProduct:"createProduct",createInventory:"createInventory",transferInventory:"transferInventory",reduceInventory:"reduceInventory",createDistributor:"createDistributor",createRetailer:"createRetailer"},Fragment:{TransactionDetails:"TransactionDetails",WarehouseDetails:"WarehouseDetails"}},N={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"Login"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"loginInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"LoginInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"login"},arguments:[{kind:"Argument",name:{kind:"Name",value:"loginInput"},value:{kind:"Variable",name:{kind:"Name",value:"loginInput"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updatedAt"}},{kind:"Field",name:{kind:"Name",value:"uid"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"image"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"email"}}]}},{kind:"Field",name:{kind:"Name",value:"token"}}]}}]}}]},f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"user"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UserWhereUniqueInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uid"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"email"}}]}}]}}]},I={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"registerWithProvider"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"registerWithProviderInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"RegisterWithProviderInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"registerWithProvider"},arguments:[{kind:"Argument",name:{kind:"Name",value:"registerWithProviderInput"},value:{kind:"Variable",name:{kind:"Name",value:"registerWithProviderInput"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updatedAt"}},{kind:"Field",name:{kind:"Name",value:"uid"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"image"}},{kind:"Field",name:{kind:"Name",value:"email"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}}]}},{kind:"Field",name:{kind:"Name",value:"token"}}]}}]}}]},y={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createManufacturer"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"createManufacturerInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CreateManufacturerInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createManufacturer"},arguments:[{kind:"Argument",name:{kind:"Name",value:"createManufacturerInput"},value:{kind:"Variable",name:{kind:"Name",value:"createManufacturerInput"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uid"}}]}}]}}]},S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createInventory"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"createInventoryInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CreateInventoryInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createInventory"},arguments:[{kind:"Argument",name:{kind:"Name",value:"createInventoryInput"},value:{kind:"Variable",name:{kind:"Name",value:"createInventoryInput"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]},g={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createDistributor"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"createDistributorInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CreateDistributorInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createDistributor"},arguments:[{kind:"Argument",name:{kind:"Name",value:"createDistributorInput"},value:{kind:"Variable",name:{kind:"Name",value:"createDistributorInput"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uid"}}]}}]}}]},D={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createRetailer"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"createRetailerInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CreateRetailerInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createRetailer"},arguments:[{kind:"Argument",name:{kind:"Name",value:"createRetailerInput"},value:{kind:"Variable",name:{kind:"Name",value:"createRetailerInput"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uid"}}]}}]}}]}},70482:(e,i,n)=>{n.d(i,{r:()=>u});var a=n(42759);let t=(0,a.createProxy)(String.raw`/home/pc1827/projects/spma/libs/ui/src/components/molecules/CustomLink.tsx`),{__esModule:r,$$typeof:d}=t;t.default;let u=(0,a.createProxy)(String.raw`/home/pc1827/projects/spma/libs/ui/src/components/molecules/CustomLink.tsx#Link`)},88393:(e,i,n)=>{n.r(i),n.d(i,{default:()=>t});var a=n(96078);let t=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};