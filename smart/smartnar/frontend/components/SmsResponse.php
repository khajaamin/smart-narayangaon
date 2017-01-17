<?php

namespace frontend\components;

use Yii;
use yii\base\Component;
use yii\base\InvalidConfigException;

/**
* 
*/
class SmsResponse extends Component
{
	public function getResponse($phone,$msg)
	{
		$url = 'http://www.eazy2sms.in/SMS.aspx';

		$options = array(
	        'Userid' => "anwar123",
	        'Password' => "anwar@123",
	        'Mobile' => "$phone",
	        'Message'=> "Dear User Your OTP is $msg, Thank You. www.sdadvertisements.com",
			'Type' => 1,
			 'TempId'=> 81359				        
	    ); 

	    $ch = curl_init();

	    curl_setopt($ch, CURLOPT_URL,$url);
	    curl_setopt($ch, CURLOPT_POST, count($options));
	    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($options));

	    $content  = curl_exec($ch);

	    curl_close($ch);

	    return $content;
	}
}