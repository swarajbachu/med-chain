import smartpy as sp

FA2 = sp.io.import_script_from_url(
    "https://smartpy.io/templates/fa2_lib.py"
)
t_userRecord = sp.TRecord(
    name = sp.TString,
    age = sp.TNat,
    blood = sp.TString,
    allergies =sp.TString,
    medication = sp.TString,
    about = sp.TString   
)

# t_documentRecord = sp.record(
#     file_title = TString,
#     doctor_issued_by = TString,
#     hospital_issued_by = TString,
#     tag = TString,
#     is_private = TBool,
#     file
    
# )




class MedChainDoc(FA2.NoTransfer,FA2.Fa2Nft):
    def __init__( self, metadata, token_metadata=[], ledger={}, policy=None, metadata_base=None):
        # self.init_type(sp.TRecord(users_map = sp.TBigMap(sp.TAddress,t_userRecord)))
        FA2.Fa2Nft.__init__(self, metadata, token_metadata=[], ledger={}, policy=None, metadata_base=None);
        self.update_initial_storage(users_map = sp.big_map())

        
    @sp.entry_point
    def mint(self,owner,token_info):
        token_id = self.data.last_token_id
        token_info = sp.set_type_expr(token_info,sp.TMap(sp.TString,sp.TBytes))

        self.data.ledger[token_id]=owner;
        self.data.token_metadata[token_id] = sp.record(
            token_id = token_id,token_info=token_info
        )
        self.data.last_token_id +=1;
    
    @sp.entry_point
    def updateUser(self,address,newUser):
        address = sp.set_type_expr(address, sp.TAddress)
        newUser = sp.set_type_expr(newUser,t_userRecord)
        self.data.users_map[address]=newUser;
    @sp.entry_point
    def getUser(self,address):
        sp.result(
            self.data.users_map[address]
        )
    @sp.entry_point
    def getDocs(self,owner):
        
    



@sp.add_test(name= "Test MedChainDoc")
def test():
    sc = sp.test_scenario()
    medChainDocContract =  MedChainDoc(
         metadata=sp.utils.metadata_of_url(
             "https://ipfs.io/ipfs/QmQYuKLiRY2hs4WCya3Ckius96JqcfvuA5L8wB4MG7Wttj"
         ) 
    )
    sc+=medChainDocContract
    # alice = sp.address("tz1YtuZ4vhzzn7ssCt93Put8U9UJDdvCXci4")
    # bob = sp.address("tz1YtuZ4vhzzn7ssCt93Put8U9UJDdvCXci4")
    # sc.show(sp.record(alice=alice,bob=bob))
    # sc.h2("Mint")
    # medChainDocContract.mint(
    #     oalice,
    #     token_info=sp.map({
    #         "":sp.utils.bytes_of_string("ipfs://QmRbxcd2yfNVdgHL7oYWS2yd3tztr2NZiqP2LFuw3voPW"),
            
    #     })
    # )
        
        