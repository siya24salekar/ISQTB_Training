/***********************************************
* JavaScriptKit.com Multiple Choice Quiz Script (http://www.javascriptkit.com)
* Copyright 2003 JavaScript Kit- http://www.javascriptkit.com
* This notice and footnote must stay intact for use
* Visit JavaScript Kit (http://www.javascriptkit.com/) for full source code
***********************************************/

//Enter total number of questions:
var totalquestions=40

//Enter the solutions corresponding to each question:
var correctchoices=new Array()
correctchoices[1]='c' //question 1 solution
correctchoices[2]='a' //question 2 solution, and so on.
correctchoices[3]='c'
correctchoices[4]='c'
correctchoices[5]='c'
correctchoices[6]='c'
correctchoices[7]='b'
correctchoices[8]='b'
correctchoices[9]='c'
correctchoices[10]='b'
correctchoices[11]='c' //question 1 solution
correctchoices[12]='a' //question 2 solution, and so on.
correctchoices[13]='c'
correctchoices[14]='c'
correctchoices[15]='c'
correctchoices[16]='c'
correctchoices[17]='b'
correctchoices[18]='b'
correctchoices[19]='c'
correctchoices[20]='b'
correctchoices[21]='c' //question 1 solution
correctchoices[22]='d' //question 2 solution, and so on.
correctchoices[23]='d'
correctchoices[24]='c'
correctchoices[25]='c'
correctchoices[26]='c'
correctchoices[27]='a'
correctchoices[28]='b'
correctchoices[29]='c'
correctchoices[30]='b'
correctchoices[31]='a' //question 1 solution
correctchoices[32]='a' //question 2 solution, and so on.
correctchoices[33]='d'
correctchoices[34]='d'
correctchoices[35]='c'
correctchoices[36]='c'
correctchoices[37]='b'
correctchoices[38]='b'
correctchoices[39]='c'
correctchoices[40]='a'

/////Don't edit beyond here//////////////////////////

function gradeit(){
var incorrect=null
for (q=1;q<=totalquestions;q++){
	var thequestion=eval("document.myquiz.question"+q)
	for (c=0;c<thequestion.length;c++){
		if (thequestion[c].checked==true)
		actualchoices[q]=thequestion[c].value
		}
		
	if (actualchoices[q]!=correctchoices[q]){ //process an incorrect choice
		if (incorrect==null)
		incorrect=q
		else
		incorrect+="/"+q
		}
	}

if (incorrect==null)
incorrect="a/b"
document.cookie='q='+incorrect
if (document.cookie=='')
alert("Your browser does not accept cookies. Please adjust your browser settings.")
else
window.location="results.htm"
}


function showsolution(){
var win2=window.open("","win2","width=200,height=350, scrollbars")
win2.focus()
win2.document.open()
win2.document.write('<title>Solution</title>')
win2.document.write('<body bgcolor="#FFFFFF">')
win2.document.write('<center><h3>Solution to Quiz</h3></center>')
win2.document.write('<center><font face="Arial">')
for (i=1;i<=totalquestions;i++){
for (temp=0;temp<incorrect.length;temp++){
if (i==incorrect[temp])
wrong=1
}
if (wrong==1){
win2.document.write("Question "+i+"="+correctchoices[i].fontcolor("red")+"<br>")
wrong=0
}
else
win2.document.write("Question "+i+"="+correctchoices[i]+"<br>")
}
win2.document.write('</center></font>')
win2.document.write("<h5>Note: The solutions in red are the ones to the questions you had incorrectly answered.</h5><p align='center'><small><a href='http://www.javascriptkit.com' target='_new'>JavaScript Kit quiz script</a></small>")
win2.document.close()
}
