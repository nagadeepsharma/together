pragma solidity ^0.6.0;

contract Campaign{
    struct Request{
        string description;
        uint value;
        address payable recipient;
        bool complete;
        mapping(address=>bool) approvals;
        uint approvalCount;
    }
    
    address public manager;
    uint public minimumContribution;
    mapping(address=>bool) public approvers;
    uint public approversCount;
    Request[] public requests;
    string public filehash;
    string public idea;
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address campaignCreator,string memory i,string memory fh) public {
        manager = campaignCreator;
        minimumContribution = minimum;
        filehash=fh;
        idea=i;
    }
    
    function contribute() public payable{
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        
        approversCount++;
    }
    
    function createRequest(string memory description, uint value, address payable recipient) public restricted{
        Request memory newRequest = Request({
            description : description,
            value : value,
            recipient : recipient,
            complete : false,
            approvalCount : 0
        });
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public{
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted{
        Request storage request = requests[index];
        
        require(!request.complete);
        require(request.approvalCount > (approversCount/2));
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns(uint, uint, uint, uint,string memory,string memory, address){
       return(
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            filehash,
            idea,
            manager
       );
    }

    function getRequestCount() public view returns(uint){
        return requests.length;
    }
}

contract CampaignFactory{
    address[] deployedCampaigns;
    
    function createCampaign(uint minimum,string memory idea,string memory filehash) public{
            address newCampaign = address(new Campaign(minimum, msg.sender,idea,filehash));
            deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[] memory){
        return deployedCampaigns;
    }
}



