# NoteTakerApi.UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUserGet**](UserApi.md#apiUserGet) | **GET** /api/User | Gets all entities.
[**apiUserIdDelete**](UserApi.md#apiUserIdDelete) | **DELETE** /api/User/{id} | Deletes an entity by Id.
[**apiUserIdGet**](UserApi.md#apiUserIdGet) | **GET** /api/User/{id} | Gets an entity by Id.
[**apiUserPost**](UserApi.md#apiUserPost) | **POST** /api/User | Creates a new entity.



## apiUserGet

> [User] apiUserGet()

Gets all entities.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.UserApi();
apiInstance.apiUserGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiUserIdDelete

> apiUserIdDelete(id)

Deletes an entity by Id.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.UserApi();
let id = 56; // Number | Entity Id.
apiInstance.apiUserIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Entity Id. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiUserIdGet

> User apiUserIdGet(id)

Gets an entity by Id.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.UserApi();
let id = 56; // Number | Entity ID.
apiInstance.apiUserIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Entity ID. | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiUserPost

> User apiUserPost(opts)

Creates a new entity.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.UserApi();
let opts = {
  'user': new NoteTakerApi.User() // User | Entity to create.
};
apiInstance.apiUserPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| Entity to create. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

