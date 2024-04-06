// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract GamerhubManager {

    address public owner;
    uint public balance;

    struct Subscription  {
            uint package;
            uint start;
            uint end;
    }

    struct Prices {
        uint package;
        uint duration;
        uint amount;
    }

    event subscribed (
            address indexed user,
            uint package,
            uint start,
            uint end
    );

    event withdrawal (
        address user,
        uint amount
    );

    mapping(uint => Prices) public packages;
    mapping(address => Subscription) public subscriptions;

    constructor(){
        //set owner
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner,"Access denied");
        _;
    }

   /** @dev Sets details for different packages.
      * @param _package the selected package.
      * @param _duration The length of duration.
      * @param _amount The price for selected package.
      */
    function setPackage (uint _package, uint _duration, uint _amount) external onlyOwner{
        //validate duration 
        require(_duration > 0, "Invalid duration");
        packages[_package] = Prices(_package, _duration, _amount);
    }

   /** @dev get details for different packages.
      * @param _package the selected package.
      */
    function getPackage (uint _package ) external view returns(uint duration, uint amount){
        //return package detail
       return(packages[_package].duration, packages[_package].amount);
    }



        
    /**
     *  @dev Subscribes caller.
     * @param _package  The selected package.
     * @param _start The start time for subscription.
     */
    function subscribe (uint _package,uint _start  ) external payable {
        //validate amount sent
        require(msg.value == packages[_package].amount, "Invalid amount paid");
        //validate start date
        require(_start > 0, "Invalid start date");
        //record current balance
        balance += msg.value;
        uint end =  _start + packages[_package].duration;
        //record subscription
        subscriptions[msg.sender] = Subscription(_package,_start,end);
        emit subscribed(msg.sender, _package, _start, end);

    }

    
    /**
     * @dev Withdraws accumulated balance.
     * @param _amount The amount beign withdrawn.
     */
    function withdraw (uint _amount) external onlyOwner    { 
        //validate amount being withdrawn
        require (_amount <= address(this).balance, "Withdrawal limit exceeded");
         balance -= _amount;
         //transfer funds
        (bool sent, ) = msg.sender.call{value: _amount}("");
        require(sent, "Failed to send BNB");
        emit withdrawal(msg.sender, _amount);
    }

    
}