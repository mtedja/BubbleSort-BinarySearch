// Bubble sort Algorithm 

// Make function of bubble sort
function bubbleSort(arr){ 
    
    var i, j; 
    var len = arr.length; 
      
    // Make condition variable (if the number is greater then before then this variable become true)
    var isSwapped = false; 
      
    for(i =0; i < len; i++){ 
        
      // Declare again for make sure the first checked number is smaller   
      isSwapped = false; 
        
      // This for using to check every number, if the next number is greater then before number, then that's number is save to temp variable then check number after the before number. Until end. 
      for(j = 0; j < len; j++){ 
          if(arr[j] > arr[j + 1]){  
            var temp = arr[j] 
            arr[j] = arr[j+1]; 
            arr[j+1] = temp; 
            isSwapped = true; 
          } 
      } 
        
      // IF no two elements were swapped by inner loop, then break  
        
      if(!isSwapped){ 
        break; 
      } 
    } 
      
    // Print the array 
    console.log(arr) 
  } 
    
    
  // Example data
  var arr = [243, 45, 23, 356, 3, 5346, 35, 5]; 
    
  // Calling the bubbleSort Function 
  bubbleSort(arr)