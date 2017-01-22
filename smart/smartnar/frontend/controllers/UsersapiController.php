<?php
namespace frontend\controllers;

use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\rest\ActiveController;
use yii\web\Response;
use common\models\Ratings; 
use common\models\Users;
use yii\db\Expression;
use linslin\yii2\curl;
use yii\web\JsExpression;

/**
 * Site controller
 */
class UsersapiController extends ActiveController
{
    public $modelClass = "common\models\Users";
    //public enableCsrfValidation = false;

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['contentNegotiator']['formats']['text/html'] = Response::FORMAT_JSON;
        

         // remove authentication filter
        $auth = $behaviors['authenticator'];
        unset($behaviors['authenticator']);
        // add CORS filter
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
        ];
        // re-add authentication filter
        $behaviors['authenticator'] = $auth;
        // avoid authentication on CORS-pre-flight requests (HTTP OPTIONS method)
        $behaviors['authenticator']['except'] = ['options'];
        return $behaviors;
    }

    public function actionSignup()
    {
       
        $model = new Users();

         $data =  json_decode(utf8_encode(file_get_contents("php://input")), false);
         if(empty($data)){

                $response["message"]="Something Went wrong";
                return $response;
                     
            }else{
            
                $model->contact= $data->mobile;
                $model->username = $data->name;
                $model->email = $data->email;
                
                        $mob = $data->mobile;
                    if($model->save(false)){

                         $random = rand(5000,10000); 
                        // //Sms intrigration goes here
                            // //Send SMS and save otp into same object
                        $model->otp = $random;
                        
                        
                        $model->save(false);
                        {
                                        $verify = Yii::$app->SmsResponse->getResponse($mob,$random);
                            
                        }                    

                        $response["message"]="Thank You for Register We will Contact you very soon";
                      
                        return $response;
                
                    }else{
                
                        $response['message']="Error";
                
                        $output = json_encode($response);
                
                        return $output;
                    }

                

            }
    }


    public function actionRating()
    {
        $rating = new Ratings();
        $data =  json_decode(utf8_encode(file_get_contents("php://input")), false); 
        if(empty($data)){

            $response["message"]='sorry something went wrong';
            return $response;
        }else{
            $rating->shop_id = $data->id;
            $rating->value = $data->rate;
            $rating->user_id = $data->user_id;
            if($rating->save()){

                $response["message"]="Thank You";
                      
                return $response;

            }
        }
    }

    public function actionVerify()
    {
        $model = new Users();

         $data =  json_decode(utf8_encode(file_get_contents("php://input")), false);
         if(empty($data)){
                
                 // $mobile = 8899007766;
                 // $otp = 9841;
                 // $verify = $model->find()->where(['contact'=>$mobile,'otp'=>$otp])->one();
                $response["message"]='sorry something went wrong';
                //return $verify;
            }else{

                    
                 $verify = $model->find()->where(['contact'=>$data->mobile,'otp'=>$data->otp])->asArray()->one();
                 
                 if(empty($verify)){
                
                    $response['message']="Error";
                    $response["status"] = "error";
                    $response["data"] =  $model->errors;  
                    return $response;
                
                 }else{

                    $response["message"]="Welcome";
                    $response["data"] = $verify;          
                    $response["status"] = "success";          
                    
                    return $response;
    
                
                 }
                

            }
    }




}
